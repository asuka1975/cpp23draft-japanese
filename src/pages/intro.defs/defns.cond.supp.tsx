import Field from "@/components/Field"
import HeadItem from "@/components/HeadItem"
import { ReactNode } from "react";

type Props = {
    inner: boolean;
};

const content: ReactNode = <>

</>

const DefnsCondSupp: React.FC<Props> = ({ inner = false }) => {
    return (
        <div id="defns.conditionally-supported">
        {
            inner ? 
                <div>
                    <HeadItem level={4} index="3.13" title="defns.cond.supp" link="/intro.defs/conditionally-supported" linkString="conditionally-supported" />
                    {content}
                </div> :
                <Field>
                    <HeadItem level={1} index="3" title="Terms and definitions" link="/" linkString="intro.defs" />
                    <HeadItem level={4} index="3.13" title="defns.cond.supp" link="/intro.defs/conditionally-supported" linkString="conditionally-supported" />
                    {content}
                </Field>
        }
        </div>
    )
}

export default DefnsCondSupp;