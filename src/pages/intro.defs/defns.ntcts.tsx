import Field from "@/components/Field"
import HeadItem from "@/components/HeadItem"
import { ReactNode } from "react";

type Props = {
    inner: boolean;
};

const content: ReactNode = <>

</>

const DefnsNtcts: React.FC<Props> = ({ inner = false }) => {
    return (
        <div id="defns.NTCTS">
        {
            inner ? 
                <div>
                    <HeadItem level={4} index="3.36" title="defns.ntcts" link="/intro.defs/NTCTS" linkString="NTCTS" />
                    {content}
                </div> :
                <Field>
                    <HeadItem level={1} index="3" title="Terms and definitions" link="/" linkString="intro.defs" />
                    <HeadItem level={4} index="3.36" title="defns.ntcts" link="/intro.defs/NTCTS" linkString="NTCTS" />
                    {content}
                </Field>
        }
        </div>
    )
}

export default DefnsNtcts;