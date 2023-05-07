import Field from "@/components/Field"
import HeadItem from "@/components/HeadItem"
import { ReactNode } from "react";

type Props = {
    inner: boolean;
};

const content: ReactNode = <>

</>

const DefnsRegexRegularExpression: React.FC<Props> = ({ inner = false }) => {
    return (
        <div id="defns.regular expression">
        {
            inner ? 
                <div>
                    <HeadItem level={4} index="3.46" title="defns.regex.regular.expression" link="/intro.defs/regular expression" linkString="regular expression" />
                    {content}
                </div> :
                <Field>
                    <HeadItem level={1} index="3" title="Terms and definitions" link="/" linkString="intro.defs" />
                    <HeadItem level={4} index="3.46" title="defns.regex.regular.expression" link="/intro.defs/regular expression" linkString="regular expression" />
                    {content}
                </Field>
        }
        </div>
    )
}

export default DefnsRegexRegularExpression;