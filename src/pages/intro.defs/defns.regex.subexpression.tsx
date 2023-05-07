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
        <div id="defns.regex.subexpression">
        {
            inner ? 
                <div>
                    <HeadItem level={4} index="3.62" title="sub-expression" link="/intro.defs/defns.regex.subexpression" linkString="defns.regex.subexpression" />
                    {content}
                </div> :
                <Field>
                    <HeadItem level={1} index="3" title="Terms and definitions" link="/" linkString="intro.defs" />
                    <HeadItem level={4} index="3.62" title="sub-expression" link="/intro.defs/defns.regex.subexpression" linkString="defns.regex.subexpression" />
                    {content}
                </Field>
        }
        </div>
    )
}

export default DefnsRegexSubexpression;