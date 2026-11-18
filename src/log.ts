import { GM_log } from "$";

export function log(...data: unknown[]) {
	GM_log(`----- BBC -----\n`, ...data);
}
