import { ymkInit } from "./componets/ymk.js";

import {
  downloadSnapshotSkincareResult,
  downloadSnapshot,
} from "./componets/ymk.js";
import { downloadResult } from "./componets/downloadResult.js";

import { changeFrame } from "./componets/changeFrame.js";
import { frameResizerInit } from "./componets/frameResizer.js";

import { chartJsInit } from "./componets/chart.js";

ymkInit();
changeFrame();
frameResizerInit();
chartJsInit(); 

window.downloadSnapshotSkincareResult = downloadSnapshotSkincareResult;
window.downloadSnapshot = downloadSnapshot;
window.downloadResult = downloadResult;