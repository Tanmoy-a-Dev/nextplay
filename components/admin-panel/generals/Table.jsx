import React from "react";
import CustomLink from "../../common/CustomLink";

function Table({ headers = [], tableData = [], actionBtns = [] }) {
	return (
		<table>
			<thead>
				{headers.map((tableHeader, index) => (
					<th key={index}>{tableHeader}</th>
				))}
				{/* <th>Items</th>
				<th>Views</th> */}
			</thead>
			<tbody>
				{tableData.map((tableRow, index) => (
					<tr key={index}>
						{tableRow.map(({ type, main }, index) => (
							<td key={index}>
								{type === "link" ? (
									<CustomLink linkTo={main.link} linkFront={main.name} />
								) : (
									main
								)}
							</td>
						))}
					</tr>
				))}
				{/* <tr>
					<td>
						<CustomLink linkTo="/" linkFront="Loki" />
					</td>
					<td>400</td>
				</tr>
				<tr>
					<td>
						<CustomLink linkTo="/" linkFront="Black Widow" />
					</td>
					<td>1000</td>
				</tr> */}
			</tbody>
		</table>
	);
}

export default Table;
