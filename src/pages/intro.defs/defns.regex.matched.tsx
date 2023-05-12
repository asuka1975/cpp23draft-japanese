import Field from "@/components/Field"
import HeadItem from "@/components/HeadItem"
import { ReactNode } from "react";

type Props = {
    inner: boolean;
};

const content: ReactNode = <>
    <p>{"正規表現"} ゼロ個以上の文字のシーケンスがパターンで定義された文字のシーケンスと一致するときの条件</p>
</>

const DefnsRegexMatched: React.FC<Props> = ({ inner = false }) => {
    return (
        <div id="defns.regex.matched">
        {
            inner ? 
                <div>
                    <HeadItem level={4} index="3.31" title="matched" link="/intro.defs/defns.regex.matched" linkString="defns.regex.matched" />
                    {content}
                </div> :
                <Field>
                    <HeadItem level={1} index="3" title="Terms and definitions" link="/" linkString="intro.defs" />
                    <HeadItem level={4} index="3.31" title="matched" link="/intro.defs/defns.regex.matched" linkString="defns.regex.matched" />
                    {content}
                </Field>
        }
        </div>
    )
}

export default DefnsRegexMatched;