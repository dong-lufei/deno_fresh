import { createContext } from "preact";
import { useContext } from "preact/hooks";
export const HEAD_CONTEXT = createContext([]);
export function Head(props) {
    let context;
    try {
        context = useContext(HEAD_CONTEXT);
    }
    catch (err) {
        throw new Error("<Head> component is not supported in the browser, or during suspense renders.", { cause: err });
    }
    context.push(props.children);
    return null;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhlYWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFxQixhQUFhLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDMUQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQU0xQyxNQUFNLENBQUMsTUFBTSxZQUFZLEdBQUcsYUFBYSxDQUFzQixFQUFFLENBQUMsQ0FBQztBQUVuRSxNQUFNLFVBQVUsSUFBSSxDQUFDLEtBQWdCO0lBQ25DLElBQUksT0FBNEIsQ0FBQztJQUNqQyxJQUFJO1FBQ0YsT0FBTyxHQUFHLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQztLQUNwQztJQUFDLE9BQU8sR0FBRyxFQUFFO1FBQ1osTUFBTSxJQUFJLEtBQUssQ0FDYiwrRUFBK0UsRUFDL0UsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLENBQ2YsQ0FBQztLQUNIO0lBQ0QsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDN0IsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50Q2hpbGRyZW4sIGNyZWF0ZUNvbnRleHQgfSBmcm9tIFwicHJlYWN0XCI7XG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEhlYWRQcm9wcyB7XG4gIGNoaWxkcmVuOiBDb21wb25lbnRDaGlsZHJlbjtcbn1cblxuZXhwb3J0IGNvbnN0IEhFQURfQ09OVEVYVCA9IGNyZWF0ZUNvbnRleHQ8Q29tcG9uZW50Q2hpbGRyZW5bXT4oW10pO1xuXG5leHBvcnQgZnVuY3Rpb24gSGVhZChwcm9wczogSGVhZFByb3BzKSB7XG4gIGxldCBjb250ZXh0OiBDb21wb25lbnRDaGlsZHJlbltdO1xuICB0cnkge1xuICAgIGNvbnRleHQgPSB1c2VDb250ZXh0KEhFQURfQ09OVEVYVCk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgIFwiPEhlYWQ+IGNvbXBvbmVudCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoZSBicm93c2VyLCBvciBkdXJpbmcgc3VzcGVuc2UgcmVuZGVycy5cIixcbiAgICAgIHsgY2F1c2U6IGVyciB9LFxuICAgICk7XG4gIH1cbiAgY29udGV4dC5wdXNoKHByb3BzLmNoaWxkcmVuKTtcbiAgcmV0dXJuIG51bGw7XG59XG4iXX0=