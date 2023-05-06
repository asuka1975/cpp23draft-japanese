import Field from "@/components/Field"
import HeadItem from "@/components/HeadItem"
import { ReactNode } from "react";

type Props = {
    inner: boolean;
};

const content: ReactNode = <>
    <p>{"<関数形式マクロ>"} 丸括弧で囲まれた, カンマにより区切られたリストの中のプリプロセッシングトークンのシーケンス</p>
</>

const DefnsArgumentMacro: React.FC<Props> = ({ inner = false }) => {
    return (
        <div id="defns.argument.macro">
        {
            inner ? 
                <div>
                    <HeadItem level={4} index="3.4" title="argument" link="/intro.defs/defns.argument.macro" linkString="defns.argument.macro" />
                    {content}
                </div> :
                <Field>
                    <HeadItem level={1} index="3" title="Terms and definitions" link="/" linkString="intro.defs" />
                    <HeadItem level={4} index="3.4" title="argument" link="/intro.defs/defns.argument.macro" linkString="defns.argument.macro" />
                    {content}
                </Field>
        }
        </div>
    )
}

export default DefnsArgumentMacro;