import Field from "@/components/Field"
import HeadItem from "@/components/HeadItem"
import { ReactNode } from "react";

type Props = {
    inner: boolean;
};

const content: ReactNode = <>

</>

const DefnsStable: React.FC<Props> = ({ inner = false }) => {
    return (
        <div id="defns.stable algorithm">
        {
            inner ? 
                <div>
                    <HeadItem level={4} index="3.60" title="defns.stable" link="/intro.defs/stable algorithm" linkString="stable algorithm" />
                    {content}
                </div> :
                <Field>
                    <HeadItem level={1} index="3" title="Terms and definitions" link="/" linkString="intro.defs" />
                    <HeadItem level={4} index="3.60" title="defns.stable" link="/intro.defs/stable algorithm" linkString="stable algorithm" />
                    {content}
                </Field>
        }
        </div>
    )
}

export default DefnsStable;