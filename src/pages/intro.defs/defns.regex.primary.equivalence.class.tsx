import Field from "@/components/Field"
import HeadItem from "@/components/HeadItem"
import { ReactNode } from "react";

type Props = {
    inner: boolean;
};

const content: ReactNode = <>

</>

const DefnsRegexPrimaryEquivalenceClass: React.FC<Props> = ({ inner = false }) => {
    return (
        <div id="defns.primary equivalence class">
        {
            inner ? 
                <div>
                    <HeadItem level={4} index="3.41" title="defns.regex.primary.equivalence.class" link="/intro.defs/primary equivalence class" linkString="primary equivalence class" />
                    {content}
                </div> :
                <Field>
                    <HeadItem level={1} index="3" title="Terms and definitions" link="/" linkString="intro.defs" />
                    <HeadItem level={4} index="3.41" title="defns.regex.primary.equivalence.class" link="/intro.defs/primary equivalence class" linkString="primary equivalence class" />
                    {content}
                </Field>
        }
        </div>
    )
}

export default DefnsRegexPrimaryEquivalenceClass;