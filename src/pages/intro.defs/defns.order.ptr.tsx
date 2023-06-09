import Field from "@/components/Field"
import HeadItem from "@/components/HeadItem"
import { ReactNode } from "react";

type Props = {
    inner: boolean;
};

const content: ReactNode = <>
    <p>{"<library>"} 順序がビルトイン演算子の{"<, >, <=, >=, <=>"}による半順序と合致するような実装定義の全ポインタ値に渡る厳密な全順序</p>
</>

const DefnsOrderPtr: React.FC<Props> = ({ inner = false }) => {
    return (
        <div id="defns.order.ptr">
        {
            inner ? 
                <div>
                    <HeadItem level={4} index="3.27" title="implementation-defined strict total order over pointers" link="/intro.defs/defns.order.ptr" linkString="defns.order.ptr" />
                    {content}
                </div> :
                <Field>
                    <HeadItem level={1} index="3" title="Terms and definitions" link="/" linkString="intro.defs" />
                    <HeadItem level={4} index="3.27" title="implementation-defined strict total order over pointers" link="/intro.defs/defns.order.ptr" linkString="defns.order.ptr" />
                    {content}
                </Field>
        }
        </div>
    )
}

export default DefnsOrderPtr;