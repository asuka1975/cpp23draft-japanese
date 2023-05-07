import Field from "@/components/Field"
import HeadItem from "@/components/HeadItem"
import { ReactNode } from "react";

type Props = {
    inner: boolean;
};

const content: ReactNode = <>

</>

const DefnsModifier: React.FC<Props> = ({ inner = false }) => {
    return (
        <div id="defns.modifier function">
        {
            inner ? 
                <div>
                    <HeadItem level={4} index="3.32" title="defns.modifier" link="/intro.defs/modifier function" linkString="modifier function" />
                    {content}
                </div> :
                <Field>
                    <HeadItem level={1} index="3" title="Terms and definitions" link="/" linkString="intro.defs" />
                    <HeadItem level={4} index="3.32" title="defns.modifier" link="/intro.defs/modifier function" linkString="modifier function" />
                    {content}
                </Field>
        }
        </div>
    )
}

export default DefnsModifier;