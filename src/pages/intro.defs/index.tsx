import Field from "@/components/Field";
import HeadItem from "@/components/HeadItem";
import DefnsAccess from "./defns.access";
import DefnsArbitraryStream from "./defns.arbitrary.stream";

export default function IntroDefs() {
    return (
        <Field>
            <HeadItem level={1} index="3" title="Terms and definitions" link="/" linkString="intro.defs" />
            <p>この文書の目的において、ISO/IEC 2382で与えられている用語や定義、ISO 80000-2:2009で与えられている用語、定義、シンボル、そして以下が該当します。</p>
            <p>以下のURLにおいて、ISOとIECがメンテナンスしている標準化に際して用いた用語集のデータベースがあります。
            </p>
            <ul>
                <li>ISO オンライン検索プラットフォーム: <a href="https://www.iso.org/obp">https://www.iso.org/obp</a></li>
                <li>IEC Electropedia: <a href="https://www.electropedia.org">https://www.electropedia.org/</a></li>
            </ul>
            <p>
                この文書の一部のみで使われる用語については、使われたところで英語で定義されます。
            </p>
            
            <DefnsAccess inner />
            <DefnsArbitraryStream inner />
        </Field>
    )
}
