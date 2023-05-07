import Field from "@/components/Field"
import HeadItem from "@/components/HeadItem"
import { ReactNode } from "react";

type Props = {
    inner: boolean;
};

const content: ReactNode = <>

</>

const DefnsDirectNonListInit: React.FC<Props> = ({ inner = false }) => {
    return (
        <div id="defns.direct-non-list-initialization">
        {
            inner ? 
                <div>
                    <HeadItem level={4} index="3.18" title="defns.direct.non.list.init" link="/intro.defs/direct-non-list-initialization" linkString="direct-non-list-initialization" />
                    {content}
                </div> :
                <Field>
                    <HeadItem level={1} index="3" title="Terms and definitions" link="/" linkString="intro.defs" />
                    <HeadItem level={4} index="3.18" title="defns.direct.non.list.init" link="/intro.defs/direct-non-list-initialization" linkString="direct-non-list-initialization" />
                    {content}
                </Field>
        }
        </div>
    )
}

export default DefnsDirectNonListInit;