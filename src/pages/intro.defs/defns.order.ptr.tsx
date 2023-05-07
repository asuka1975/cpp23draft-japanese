import Field from "@/components/Field"
import HeadItem from "@/components/HeadItem"
import { ReactNode } from "react";

type Props = {
    inner: boolean;
};

const content: ReactNode = <>

</>

const DefnsOrderPtr: React.FC<Props> = ({ inner = false }) => {
    return (
        <div id="defns.implementation-defined strict total order over pointers">
        {
            inner ? 
                <div>
                    <HeadItem level={4} index="3.27" title="defns.order.ptr" link="/intro.defs/implementation-defined strict total order over pointers" linkString="implementation-defined strict total order over pointers" />
                    {content}
                </div> :
                <Field>
                    <HeadItem level={1} index="3" title="Terms and definitions" link="/" linkString="intro.defs" />
                    <HeadItem level={4} index="3.27" title="defns.order.ptr" link="/intro.defs/implementation-defined strict total order over pointers" linkString="implementation-defined strict total order over pointers" />
                    {content}
                </Field>
        }
        </div>
    )
}

export default DefnsOrderPtr;