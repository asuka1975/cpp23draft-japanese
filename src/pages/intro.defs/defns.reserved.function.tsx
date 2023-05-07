import Field from "@/components/Field"
import HeadItem from "@/components/HeadItem"
import { ReactNode } from "react";

type Props = {
    inner: boolean;
};

const content: ReactNode = <>

</>

const DefnsReservedFunction: React.FC<Props> = ({ inner = false }) => {
    return (
        <div id="defns.defns.reserved.function">
        {
            inner ? 
                <div>
                    <HeadItem level={4} index="3.50" title="reserved function" link="/intro.defs/defns.reserved.function" linkString="defns.reserved.function" />
                    {content}
                </div> :
                <Field>
                    <HeadItem level={1} index="3" title="Terms and definitions" link="/" linkString="intro.defs" />
                    <HeadItem level={4} index="3.50" title="reserved function" link="/intro.defs/defns.reserved.function" linkString="defns.reserved.function" />
                    {content}
                </Field>
        }
        </div>
    )
}

export default DefnsReservedFunction;