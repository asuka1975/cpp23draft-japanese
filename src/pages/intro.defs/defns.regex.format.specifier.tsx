import Field from "@/components/Field"
import HeadItem from "@/components/HeadItem"
import { ReactNode } from "react";

type Props = {
    inner: boolean;
};

const content: ReactNode = <>

</>

const DefnsRegexFormatSpecifier: React.FC<Props> = ({ inner = false }) => {
    return (
        <div id="defns.format specifier">
        {
            inner ? 
                <div>
                    <HeadItem level={4} index="3.23" title="defns.regex.format.specifier" link="/intro.defs/format specifier" linkString="format specifier" />
                    {content}
                </div> :
                <Field>
                    <HeadItem level={1} index="3" title="Terms and definitions" link="/" linkString="intro.defs" />
                    <HeadItem level={4} index="3.23" title="defns.regex.format.specifier" link="/intro.defs/format specifier" linkString="format specifier" />
                    {content}
                </Field>
        }
        </div>
    )
}

export default DefnsRegexFormatSpecifier;