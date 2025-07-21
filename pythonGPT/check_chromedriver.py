# -*- coding: utf-8 -*-
import shutil
import os
import platform

def check_chromedriver():
    chromedriver_path = shutil.which("chromedriver")

    if chromedriver_path:
        print("✅ 已偵測到 chromedriver：")
        print(f"👉 路徑：{chromedriver_path}")
        print("\n你可以在 Selenium 中這樣設定：\n")
        print(f"CHROMEDRIVER_PATH = '{chromedriver_path}'")
        return chromedriver_path
    else:
        print("❌ 沒有偵測到 chromedriver！")
        print("\n你需要安裝 ChromeDriver，它讓 Python 能夠自動操作 Chrome。")
        print("推薦你使用 Homebrew 來安裝（macOS 專用）：\n")

        print("🔧 安裝指令：")
        print("    brew install chromedriver")

        print("\n如果你沒有 Homebrew，可以先安裝 Homebrew：")
        print("    /bin/bash -c \"$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)\"")

        print("\n裝好之後，重新執行這支程式，就能確認安裝成功囉 ✅")

        return None

if __name__ == '__main__':
    print("🔍 開始檢查 chromedriver...")
    check_chromedriver()
