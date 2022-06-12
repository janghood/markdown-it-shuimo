/**
 * @description table test
 * @author 阿怪
 * @date 2022/4/22 01:12
 * @version v1.0.0
 *
 * 江湖的业务千篇一律，复杂的代码好几百行。
 */


import { expect, test } from "vitest";
import MarkdownIt from "markdown-it";
import { table } from "../src/rules/table";
import fs from "fs";


test('test table', () => {
  const markdown = new MarkdownIt();
  const md = fs.readFileSync(__dirname + '/example/table.md', 'utf-8');
  markdown.block.ruler.disable('table');
  markdown.block.ruler.before('code', 'wTable', table, {
    alt: ['paragraph', 'reference']
  });
  let tokens = markdown.parse(md, {});
  const str = markdown.renderer.render(tokens, {}, {});
  expect(str).toMatchInlineSnapshot(`
    "<div class=\\"m-table\\">
    <div class=\\"m-table-header-img-top\\"></div>
    <div class=\\"m-table-header-img-bottom\\"></div>
    <div class=\\"m-table-wrap\\">
    <table class=\\"m-table-inner\\">
    <thead class=\\"m-thead\\">
    <tr class=\\"m-tr\\">
    <th class=\\"m-th\\">title</th>
    <th class=\\"m-th\\">type</th>
    </tr>
    </thead>
    <tbody class=\\"m-tbody\\">
    <tr class=\\"m-tr\\">
    <td class=\\"m-td\\">text</td>
    <td class=\\"m-td\\">string or VNode</td>
    <td class=\\"m-table-tbody-img\\"></td>
    </tr>
    <tr class=\\"m-tr\\">
    <td class=\\"m-td\\">disabled</td>
    <td class=\\"m-td\\">boolean</td>
    <td class=\\"m-table-tbody-img\\"></td>
    </tr>
    </tbody>
    </table>
    </div>
    <div class=\\"m-table-border-img-bottom\\"></div>
    </div>
    "
  `);
})
