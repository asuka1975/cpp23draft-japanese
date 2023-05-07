import Field from "@/components/Field"
import HeadItem from "@/components/HeadItem"
import { ReactNode } from "react";

type Props = {
    inner: boolean;
};

const content: ReactNode = <>
    <p>{"<library>"} C++プログラムによって定義が提供されるかもしれない、予約されてない関数</p>
    <p>[Note 1: あるC++プログラムはその実行における様々なポイントで、handler functionを備えたライブラリ関数のどれかを呼び出すとき関数ポインタを供給することでhandler functionを指定するかもしれません。(<a href="/support">[support]</a>)]</p>
</>

const DefnsHandler: React.FC<Props> = ({ inner = false }) => {
    return (
        <div id="defns.handler">
        {
            inner ? 
                <div>
                    <HeadItem level={4} index="3.24" title="handler function" link="/intro.defs/defns.handler" linkString="defns.handler" />
                    {content}
                </div> :
                <Field>
                    <HeadItem level={1} index="3" title="Terms and definitions" link="/" linkString="intro.defs" />
                    <HeadItem level={4} index="3.24" title="handler function" link="/intro.defs/defns.handler" linkString="defns.handler" />
                    {content}
                </Field>
        }
        </div>
    )
}

export default DefnsHandler;