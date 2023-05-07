import Field from "@/components/Field"
import HeadItem from "@/components/HeadItem"
import { ReactNode } from "react";

type Props = {
    inner: boolean;
};

const content: ReactNode = <>
    <p>{"<library>"} 連続的に扱ったときにテキストとして解釈できるオブジェクト</p>
    <p>[Note 1: この用語は、char, char8_t, char16_t, char32_tに限らず、<a href="/strings">[strings]</a>, <a href="/location">[localization]</a>, <a href="/input.output">[input.output]</a>, or <a href="/re">[re]</a>で指定される定義を備えた型によって表現できる型すべてを意味します。]</p>
</>


const DefnsCharacter: React.FC<Props> = ({ inner = false }) => {
    return (
        <div id="defns.character">
        {
            inner ? 
                <div>
                    <HeadItem level={4} index="3.9" title="character" link="/intro.defs/defns.character" linkString="defns.character" />
                    {content}
                </div> :
                <Field>
                    <HeadItem level={1} index="3" title="Terms and definitions" link="/" linkString="intro.defs" />
                    <HeadItem level={4} index="3.9" title="character" link="/intro.defs/defns.character" linkString="defns.character" />
                    {content}
                </Field>
        }
        </div>
    )
}

export default DefnsCharacter;