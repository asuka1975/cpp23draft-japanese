import Field from "@/components/Field"
import HeadItem from "@/components/HeadItem"
import { ReactNode } from "react";

type Props = {
    inner: boolean;
};

const content: ReactNode = <>
    <p>{"<regular expression>"} 正規表現の一部として入れ替えられる１個以上の文字の並び</p>
</>

const DefnsRegexFormatSpecifier: React.FC<Props> = ({ inner = false }) => {
    return (
        <div id="defns.defns.regex.format.specifier">
        {
            inner ? 
                <div>
                    <HeadItem level={4} index="3.23" title="format specifier" link="/intro.defs/defns.regex.format.specifier" linkString="defns.regex.format.specifier" />
                    {content}
                </div> :
                <Field>
                    <HeadItem level={1} index="3" title="Terms and definitions" link="/" linkString="intro.defs" />
                    <HeadItem level={4} index="3.23" title="format specifier" link="/intro.defs/defns.regex.format.specifier" linkString="defns.regex.format.specifier" />
                    {content}
                </Field>
        }
        </div>
    )
}

export default DefnsRegexFormatSpecifier;