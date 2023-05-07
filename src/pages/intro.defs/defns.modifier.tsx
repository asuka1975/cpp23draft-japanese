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
        <div id="defns.modifier">
        {
            inner ? 
                <div>
                    <HeadItem level={4} index="3.32" title="modifier function" link="/intro.defs/defns.modifier" linkString="defns.modifier" />
                    {content}
                </div> :
                <Field>
                    <HeadItem level={1} index="3" title="Terms and definitions" link="/" linkString="intro.defs" />
                    <HeadItem level={4} index="3.32" title="modifier function" link="/intro.defs/defns.modifier" linkString="defns.modifier" />
                    {content}
                </Field>
        }
        </div>
    )
}

export default DefnsModifier;