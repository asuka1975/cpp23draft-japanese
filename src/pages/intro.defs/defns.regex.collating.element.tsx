import Field from "@/components/Field"
import HeadItem from "@/components/HeadItem"
import { ReactNode } from "react";

type Props = {
    inner: boolean;
};

const content: ReactNode = <>
    <p>現在のロケールにおいて、一つの文字として照合される１個以上の文字の連続</p>
</>

const DefnsRegexCollatingElement: React.FC<Props> = ({ inner = false }) => {
    return (
        <div id="defns.defns.regex.collating.element">
        {
            inner ? 
                <div>
                    <HeadItem level={4} index="3.11" title="collating element" link="/intro.defs/defns.regex.collating.element" linkString="defns.regex.collating.element" />
                    {content}
                </div> :
                <Field>
                    <HeadItem level={1} index="3" title="Terms and definitions" link="/" linkString="intro.defs" />
                    <HeadItem level={4} index="3.11" title="collating element" link="/intro.defs/defns.regex.collating.element" linkString="defns.regex.collating.element" />
                    {content}
                </Field>
        }
        </div>
    )
}

export default DefnsRegexCollatingElement;