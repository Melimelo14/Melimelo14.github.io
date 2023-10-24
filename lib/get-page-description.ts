import * as types from "./types";
import { getPageProperty } from "notion-utils";

export function getPageDescription(
  block: types.Block,
  recordMap: types.ExtendedRecordMap
): string | null {
  return (
    block.properties?.Description ??
    getPageProperty("Description", block, recordMap)
  );
}
