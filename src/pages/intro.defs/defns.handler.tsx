import Field from "@/components/Field"
import HeadItem from "@/components/HeadItem"
import { ReactNode } from "react";

type Props = {
    inner: boolean;
};

const content: ReactNode = <>

</>

const DefnsHandler: React.FC<Props> = ({ inner = false }) => {
    return (
        <div id="defns.handler function">
        {
            inner ? 
                <div>
                    <HeadItem level={4} index="3.24" title="defns.handler" link="/intro.defs/handler function" linkString="handler function" />
                    {content}
                </div> :
                <Field>
                    <HeadItem level={1} index="3" title="Terms and definitions" link="/" linkString="intro.defs" />
                    <HeadItem level={4} index="3.24" title="defns.handler" link="/intro.defs/handler function" linkString="handler function" />
                    {content}
                </Field>
        }
        </div>
    )
}

export default DefnsHandler;