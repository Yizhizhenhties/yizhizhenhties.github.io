import { Button, Divider, Input, Tooltip, Typography } from "antd";
import { useEffect, useRef, useState } from "react"
import { evaluate } from 'mathjs';
import useCopy from "@/hooks/useCopy";

export default function Calculate() {
    const [inputValue, setInputValue] = useState("");
    const [result, setResult] = useState<any>(undefined);
    const { copyToClipboard } = useCopy();
    const buttonRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.ctrlKey && event.key === 'Enter') {
                event.preventDefault();
                event.stopPropagation();
                buttonRef.current?.click();
            }
          };
        
        window.addEventListener('keydown', handleKeyDown);
    
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [])

    return (
        <div className="bg-white w-full h-full p-4">
            <div className="font-semibold text-xl py-4">数学表达式计算（Ctrl + Enter 快捷计算）</div>
            <div className="flex items-center space-x-2">
                <div className="flex-1">
                    <Input.TextArea placeholder="请输入计算式" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                </div>
                <Button
                    ref={buttonRef}
                    type="primary"
                    onClick={() => {
                        try {
                            setResult(evaluate(inputValue.trim()))
                        } catch {
                            setResult("表达式不规范")
                        }
                    }}>
                    计算
                </Button>
            </div>
            <div className="py-4 text-lg">
                结果:
                {result?.toString?.() && 
                    <Tooltip title="点击复制">
                        <span 
                            className="decoration-dashed hover:underline hover:cursor-pointer break-all font-semibold ml-4"
                            onClick={() => {
                                copyToClipboard(result?.toString?.())
                            }}>
                            {result?.toString?.() ?? ""}
                        </span>
                    </Tooltip>
                }
            </div>
            <Divider className="my-0"/>
            <div>
                计算由 &nbsp; 
                <a className="text-blue-500" href="https://mathjs.org/" target="__blank">math.js</a>
                &nbsp; 提供的 <Typography.Text code>{"evaluate()"}</Typography.Text> 实现，支持符号计算、单位、矩阵等，示例如下：
                <br/>
                <Typography.Paragraph>
                    <pre>
                        <div>输入: 1.2 * (2 + 4.5)          输出: 7.8</div>
                        <div>输入: 12.7 cm to inch          输出: 5 inch</div>
                        <div>输入: sin(45 deg) ^ 2          输出: 0.4999999999999999</div>
                        <div>输入: 2 * 1e10                 输出: 20000000000</div>
                        <div>输入: det([-1, 2; 3, 1])       输出: 7</div>
                        <div>输入: [1, 2, 3] + [4, 5, 6]    输出: [5, 7, 9]</div>
                        ....
                    </pre>
                </Typography.Paragraph>
                更多详情请查看&nbsp;
                <a className="text-blue-500" href="https://mathjs.org/" target="__blank">math.js</a>
                &nbsp;文档
            </div>
        </div>
    )
}