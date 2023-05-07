import Field from "@/components/Field"
import HeadItem from "@/components/HeadItem"
import { ReactNode } from "react";

type Props = {
    inner: boolean;
};

const content: ReactNode = <>

</>

const DefnsUnblock: React.FC<Props> = ({ inner = false }) => {
    return (
        <div id="defns.unblock">
        {
            inner ? 
                <div>
                    <HeadItem level={4} index="3.64" title="defns.unblock" link="/intro.defs/unblock" linkString="unblock" />
                    {content}
                </div> :
                <Field>
                    <HeadItem level={1} index="3" title="Terms and definitions" link="/" linkString="intro.defs" />
                    <HeadItem level={4} index="3.64" title="defns.unblock" link="/intro.defs/unblock" linkString="unblock" />
                    {content}
                </Field>
        }
        </div>
    )
}

export default DefnsUnblock;