import Field from "@/components/Field"
import HeadItem from "@/components/HeadItem"
import { ReactNode } from "react";

type Props = {
    inner: boolean;
};

const content: ReactNode = <>
    <p>{"<関数呼び出し式>"} 丸括弧で囲まれた, カンマにより区切られたリストの中の式</p>
</>

const DefnsArgument: React.FC<Props> = ({ inner = false }) => {
    return (
        <div id="defns.argument">
        {
            inner ? 
                <div>
                    <HeadItem level={4} index="3.3" title="argument" link="/intro.defs/defns.argument" linkString="defns.argument" />
                    {content}
                </div> :
                <Field>
                    <HeadItem level={1} index="3" title="Terms and definitions" link="/" linkString="intro.defs" />
                    <HeadItem level={4} index="3.3" title="argument" link="/intro.defs/defns.argument" linkString="defns.argument" />
                    {content}
                </Field>
        }
        </div>
    )
}

export default DefnsArgument;