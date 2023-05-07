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
        <div id="defns.stable">
        {
            inner ? 
                <div>
                    <HeadItem level={4} index="3.60" title="stable algorithm" link="/intro.defs/defns.stable" linkString="defns.stable" />
                    {content}
                </div> :
                <Field>
                    <HeadItem level={1} index="3" title="Terms and definitions" link="/" linkString="intro.defs" />
                    <HeadItem level={4} index="3.60" title="stable algorithm" link="/intro.defs/defns.stable" linkString="defns.stable" />
                    {content}
                </Field>
        }
        </div>
    )
}

export default DefnsStable;