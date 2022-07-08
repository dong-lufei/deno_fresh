import { h } from "preact";
import Countdown from "../islands/Countdown.tsx";
export default function Page() {
    const date = new Date();
    date.setHours(date.getHours() + 1);
    return (h("p", null,
        "The big event is happening ",
        h(Countdown, { target: date.toISOString() }),
        "."));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291bnRkb3duLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY291bnRkb3duLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsQ0FBQyxFQUFFLE1BQU0sUUFBUSxDQUFBO0FBQzFCLE9BQU8sU0FBUyxNQUFNLDBCQUEwQixDQUFBO0FBRWhELE1BQU0sQ0FBQyxPQUFPLFVBQVUsSUFBSTtJQUMxQixNQUFNLElBQUksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFBO0lBQ3ZCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFBO0lBQ2xDLE9BQU8sQ0FDTDs7UUFDNkIsRUFBQyxTQUFTLElBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsR0FBSTtZQUNsRSxDQUNMLENBQUE7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3ggaCAqL1xyXG5pbXBvcnQgeyBoIH0gZnJvbSBcInByZWFjdFwiXHJcbmltcG9ydCBDb3VudGRvd24gZnJvbSBcIi4uL2lzbGFuZHMvQ291bnRkb3duLnRzeFwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdlKCkge1xyXG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpXHJcbiAgZGF0ZS5zZXRIb3VycyhkYXRlLmdldEhvdXJzKCkgKyAxKVxyXG4gIHJldHVybiAoXHJcbiAgICA8cD5cclxuICAgICAgVGhlIGJpZyBldmVudCBpcyBoYXBwZW5pbmcgPENvdW50ZG93biB0YXJnZXQ9e2RhdGUudG9JU09TdHJpbmcoKX0gLz4uXHJcbiAgICA8L3A+XHJcbiAgKVxyXG59XHJcbiJdfQ==