import Field from "@/components/Field"
import HeadItem from "@/components/HeadItem"
import { ReactNode } from "react";

type Props = {
    inner: boolean;
};

const content: ReactNode = <>

</>

const DefnsRegexCollatingElement: React.FC<Props> = ({ inner = false }) => {
    return (
        <div id="defns.collating element">
        {
            inner ? 
                <div>
                    <HeadItem level={4} index="3.11" title="defns.regex.collating.element" link="/intro.defs/collating element" linkString="collating element" />
                    {content}
                </div> :
                <Field>
                    <HeadItem level={1} index="3" title="Terms and definitions" link="/" linkString="intro.defs" />
                    <HeadItem level={4} index="3.11" title="defns.regex.collating.element" link="/intro.defs/collating element" linkString="collating element" />
                    {content}
                </Field>
        }
        </div>
    )
}

export default DefnsRegexCollatingElement;