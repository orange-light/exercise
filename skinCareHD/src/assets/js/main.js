import { ymkInit } from "./componets/ymk.js";

import {
  downloadSnapshotSkincareResult,
  downloadSnapshot,
} from "./componets/ymk.js";
import { changeFrame } from "./componets/changeFrame.js";
import { frameResizerInit } from "./componets/frameResizer.js";

ymkInit();
changeFrame();
frameResizerInit();

window.downloadSnapshotSkincareResult = downloadSnapshotSkincareResult;
window.downloadSnapshot = downloadSnapshot;
