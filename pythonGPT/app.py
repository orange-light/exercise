# -*- coding: utf-8 -*-
from flask import Flask, render_template, request, jsonify
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.action_chains import ActionChains
import shutil
import time
import traceback

app = Flask(__name__)

def get_chromedriver_path():
    # 自動找出 chromedriver 的路徑
    return shutil.which("chromedriver")

def launch_chatgpt_and_get_reply(message):
    chromedriver_path = get_chromedriver_path()
    if not chromedriver_path:
        return "❌ 尚未安裝 ChromeDriver，請先執行 brew install chromedriver"

    print("⚠️ 即將啟動瀏覽器操作，請勿觸碰滑鼠與鍵盤（倒數 3 秒）")
    time.sleep(1)
    print("3...")
    time.sleep(1)
    print("2...")
    time.sleep(1)
    print("1...")
    
    service = Service(chromedriver_path)
    options = webdriver.ChromeOptions()

    # options.add_argument("--user-data-dir=...")
    # options.add_argument("--profile-directory=...")

    driver = webdriver.Chrome(service=service, options=options)
    driver.get("https://chat.openai.com/")
    print("已開啟chatGPT網頁")

    wait = WebDriverWait(driver, 30)

    try:
        time.sleep(2)
        try:
            close_btn = driver.find_element(By.XPATH, "//button[contains(., 'Next')]")
            close_btn.click()
        except:
            pass

        # 印出目前頁面 HTML 幫助除錯
        html = driver.page_source
        with open("chatgpt_debug.html", "w", encoding="utf-8") as f:
            f.write(html)
        print("📄 頁面 HTML 已輸出為 chatgpt_debug.html")

        # 嘗試抓第一個 textarea 看看
        input_div = wait.until(EC.presence_of_element_located((By.CSS_SELECTOR, "div.ProseMirror[contenteditable='true']")))
        print("🧐 找到 ProseMirror 輸入框，HTML：")
        print(input_div.get_attribute("outerHTML"))

        # 點擊讓它聚焦
        input_div.click()
        time.sleep(0.3)

        # 用 JavaScript 或 send_keys 輸入訊息（建議用 send_keys）
        input_div.send_keys(message + "\n")
        print("✅ 已輸入訊息")

        time.sleep(10)
        replies = driver.find_elements(By.CLASS_NAME, "markdown")
        reply_text = replies[-1].text if replies else "⚠️ 無法取得回覆內容"

        return reply_text

    except Exception as e:
        print("❌ 發生錯誤，堆疊如下：")
        traceback.print_exc()
        return f"⚠️ 發生錯誤：{str(e)}"
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/send', methods=['POST'])
def send():
    try:
        data = request.get_json()
        message = data.get('message')

        chromedriver_path = get_chromedriver_path()
        if not chromedriver_path:
            return jsonify({'reply': "❌ 你的系統尚未安裝 ChromeDriver！請先執行：\nbrew install chromedriver"})

        reply = launch_chatgpt_and_get_reply(message)
        return jsonify({'reply': reply})
    
    except Exception as e:
        # 把錯誤訊息也回傳給前端
        return jsonify({'reply': f"⚠️ 發生錯誤：{str(e)}"})

if __name__ == '__main__':
    # 原本這樣寫
    # app.run(debug=True)
    # 改寫成下面這樣，這樣別人才能從區網連進來看你做的網頁。
    app.run(host='0.0.0.0', port=5001, debug=True)
