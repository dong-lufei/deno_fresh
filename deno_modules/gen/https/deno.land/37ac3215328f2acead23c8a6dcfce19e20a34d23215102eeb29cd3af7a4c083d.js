import { h } from "preact";
import { DEBUG } from "./constants.ts";
export default function DefaultErrorPage(props) {
    const { error } = props;
    let message = undefined;
    if (DEBUG) {
        if (error instanceof Error) {
            message = error.stack;
        }
        else {
            message = String(error);
        }
    }
    return (h("div", { style: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        } },
        h("div", { style: {
                border: "#f3f4f6 2px solid",
                borderTop: "red 4px solid",
                background: "#f9fafb",
                margin: 16,
                minWidth: "300px",
                width: "50%",
            } },
            h("p", { style: {
                    margin: 0,
                    fontSize: "12pt",
                    padding: 16,
                    fontFamily: "sans-serif",
                } }, "An error occured during route handling or page rendering."),
            message && (h("pre", { style: {
                    margin: 0,
                    fontSize: "12pt",
                    overflowY: "auto",
                    padding: 16,
                    paddingTop: 0,
                    fontFamily: "monospace",
                } }, message)))));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdF9lcnJvcl9wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGVmYXVsdF9lcnJvcl9wYWdlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLEVBQUUsQ0FBQyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQzNCLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUd2QyxNQUFNLENBQUMsT0FBTyxVQUFVLGdCQUFnQixDQUFDLEtBQXFCO0lBQzVELE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxLQUFLLENBQUM7SUFFeEIsSUFBSSxPQUFPLEdBQUcsU0FBUyxDQUFDO0lBQ3hCLElBQUksS0FBSyxFQUFFO1FBQ1QsSUFBSSxLQUFLLFlBQVksS0FBSyxFQUFFO1lBQzFCLE9BQU8sR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO1NBQ3ZCO2FBQU07WUFDTCxPQUFPLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3pCO0tBQ0Y7SUFFRCxPQUFPLENBQ0wsV0FDRSxLQUFLLEVBQUU7WUFDTCxPQUFPLEVBQUUsTUFBTTtZQUNmLGNBQWMsRUFBRSxRQUFRO1lBQ3hCLFVBQVUsRUFBRSxRQUFRO1NBQ3JCO1FBRUQsV0FDRSxLQUFLLEVBQUU7Z0JBQ0wsTUFBTSxFQUFFLG1CQUFtQjtnQkFDM0IsU0FBUyxFQUFFLGVBQWU7Z0JBQzFCLFVBQVUsRUFBRSxTQUFTO2dCQUNyQixNQUFNLEVBQUUsRUFBRTtnQkFDVixRQUFRLEVBQUUsT0FBTztnQkFDakIsS0FBSyxFQUFFLEtBQUs7YUFDYjtZQUVELFNBQ0UsS0FBSyxFQUFFO29CQUNMLE1BQU0sRUFBRSxDQUFDO29CQUNULFFBQVEsRUFBRSxNQUFNO29CQUNoQixPQUFPLEVBQUUsRUFBRTtvQkFDWCxVQUFVLEVBQUUsWUFBWTtpQkFDekIsZ0VBR0M7WUFDSCxPQUFPLElBQUksQ0FDVixXQUNFLEtBQUssRUFBRTtvQkFDTCxNQUFNLEVBQUUsQ0FBQztvQkFDVCxRQUFRLEVBQUUsTUFBTTtvQkFDaEIsU0FBUyxFQUFFLE1BQU07b0JBQ2pCLE9BQU8sRUFBRSxFQUFFO29CQUNYLFVBQVUsRUFBRSxDQUFDO29CQUNiLFVBQVUsRUFBRSxXQUFXO2lCQUN4QixJQUVBLE9BQU8sQ0FDSixDQUNQLENBQ0csQ0FDRixDQUNQLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3ggaCAqL1xuXG5pbXBvcnQgeyBoIH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IHsgREVCVUcgfSBmcm9tIFwiLi9jb25zdGFudHMudHNcIjtcbmltcG9ydCB0eXBlIHsgRXJyb3JQYWdlUHJvcHMgfSBmcm9tIFwiLi90eXBlcy50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZWZhdWx0RXJyb3JQYWdlKHByb3BzOiBFcnJvclBhZ2VQcm9wcykge1xuICBjb25zdCB7IGVycm9yIH0gPSBwcm9wcztcblxuICBsZXQgbWVzc2FnZSA9IHVuZGVmaW5lZDtcbiAgaWYgKERFQlVHKSB7XG4gICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgIG1lc3NhZ2UgPSBlcnJvci5zdGFjaztcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZSA9IFN0cmluZyhlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBzdHlsZT17e1xuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBib3JkZXI6IFwiI2YzZjRmNiAycHggc29saWRcIixcbiAgICAgICAgICBib3JkZXJUb3A6IFwicmVkIDRweCBzb2xpZFwiLFxuICAgICAgICAgIGJhY2tncm91bmQ6IFwiI2Y5ZmFmYlwiLFxuICAgICAgICAgIG1hcmdpbjogMTYsXG4gICAgICAgICAgbWluV2lkdGg6IFwiMzAwcHhcIixcbiAgICAgICAgICB3aWR0aDogXCI1MCVcIixcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPHBcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgICAgICAgZm9udFNpemU6IFwiMTJwdFwiLFxuICAgICAgICAgICAgcGFkZGluZzogMTYsXG4gICAgICAgICAgICBmb250RmFtaWx5OiBcInNhbnMtc2VyaWZcIixcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgQW4gZXJyb3Igb2NjdXJlZCBkdXJpbmcgcm91dGUgaGFuZGxpbmcgb3IgcGFnZSByZW5kZXJpbmcuXG4gICAgICAgIDwvcD5cbiAgICAgICAge21lc3NhZ2UgJiYgKFxuICAgICAgICAgIDxwcmVcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIG1hcmdpbjogMCxcbiAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTJwdFwiLFxuICAgICAgICAgICAgICBvdmVyZmxvd1k6IFwiYXV0b1wiLFxuICAgICAgICAgICAgICBwYWRkaW5nOiAxNixcbiAgICAgICAgICAgICAgcGFkZGluZ1RvcDogMCxcbiAgICAgICAgICAgICAgZm9udEZhbWlseTogXCJtb25vc3BhY2VcIixcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge21lc3NhZ2V9XG4gICAgICAgICAgPC9wcmU+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdfQ==