export function sleep(milliseconds: number) {
    const now = new Date().getTime();
    while (new Date().getTime() < now + milliseconds) {
      /* do nothing */
    }
}
