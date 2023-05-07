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
        <div id="defns.defns.cond.supp">
        {
            inner ? 
                <div>
                    <HeadItem level={4} index="3.13" title="conditionally-supported" link="/intro.defs/defns.cond.supp" linkString="defns.cond.supp" />
                    {content}
                </div> :
                <Field>
                    <HeadItem level={1} index="3" title="Terms and definitions" link="/" linkString="intro.defs" />
                    <HeadItem level={4} index="3.13" title="conditionally-supported" link="/intro.defs/defns.cond.supp" linkString="defns.cond.supp" />
                    {content}
                </Field>
        }
        </div>
    )
}

export default DefnsCondSupp;