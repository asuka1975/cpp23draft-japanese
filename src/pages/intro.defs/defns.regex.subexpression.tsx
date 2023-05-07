import Field from "@/components/Field"
import HeadItem from "@/components/HeadItem"
import { ReactNode } from "react";

type Props = {
    inner: boolean;
};

const content: ReactNode = <>

</>

const DefnsRegexSubexpression: React.FC<Props> = ({ inner = false }) => {
    return (
        <div id="defns.sub-expression">
        {
            inner ? 
                <div>
                    <HeadItem level={4} index="3.62" title="defns.regex.subexpression" link="/intro.defs/sub-expression" linkString="sub-expression" />
                    {content}
                </div> :
                <Field>
                    <HeadItem level={1} index="3" title="Terms and definitions" link="/" linkString="intro.defs" />
                    <HeadItem level={4} index="3.62" title="defns.regex.subexpression" link="/intro.defs/sub-expression" linkString="sub-expression" />
                    {content}
                </Field>
        }
        </div>
    )
}

export default DefnsRegexSubexpression;