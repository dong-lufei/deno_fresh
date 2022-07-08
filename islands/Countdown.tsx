/** @jsx h */
import { h } from "preact"
import { useEffect, useState } from "preact/hooks"

const timeFmt = new Intl.RelativeTimeFormat("en-US")

// The target date is passed as a string instead of as a `Date`, because the
// props to island components need to be JSON (de)serializable.
export default function Countdown(props: { target: string }) {
  const target = new Date(props.target)
  const [now, setNow] = useState(new Date())

  //只要组件已挂载，就设置一个间隔，每秒用当前日期更新 `now` 日期
  useEffect(() => {
    const timer = setInterval(() => {
      setNow((now) => {
        if (now > target) {
          clearInterval(timer)
        }
        return new Date()
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [props.target])

  // 如果目标日期已经过去，停止倒计时
  if (now > target) {
    return <span>🎉</span>
  }

  // 否则，我们使用 `Intl.RelativeTimeFormat` 格式化剩余时间并渲染它
  const secondsLeft = Math.floor((target.getTime() - now.getTime()) / 1000)
  return <span>{timeFmt.format(secondsLeft, "seconds")}</span>
}
