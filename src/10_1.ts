const day_10_1 = () => {
	const data = [
		"addx 1", //
		"noop",
		"addx 2",
		"noop",
		"addx 3",
		"addx 3",
		"addx 1",
		"addx 5",
		"addx 1",
		"noop",
		"noop",
		"addx 4",
		"noop",
		"noop",
		"addx -9",
		"addx 16",
		"addx -1",
		"noop",
		"addx 5",
		"addx -2",
		"addx 4",
		"addx -35",
		"addx 2",
		"addx 28",
		"noop",
		"addx -23",
		"addx 3",
		"addx -2",
		"addx 2",
		"addx 5",
		"addx -8",
		"addx 19",
		"addx -8",
		"addx 2",
		"addx 5",
		"addx 5",
		"addx -14",
		"addx 12",
		"addx 2",
		"addx 5",
		"addx 2",
		"addx -13",
		"addx -23",
		"noop",
		"addx 1",
		"addx 5",
		"addx -1",
		"addx 2",
		"addx 4",
		"addx -9",
		"addx 10",
		"noop",
		"addx 6",
		"addx -11",
		"addx 12",
		"addx 5",
		"addx -25",
		"addx 30",
		"addx -2",
		"addx 2",
		"addx -5",
		"addx 12",
		"addx -37",
		"noop",
		"noop",
		"noop",
		"addx 24",
		"addx -17",
		"noop",
		"addx 33",
		"addx -32",
		"addx 3",
		"addx 1",
		"noop",
		"addx 6",
		"addx -13",
		"addx 17",
		"noop",
		"noop",
		"noop",
		"addx 12",
		"addx -4",
		"addx -2",
		"addx 2",
		"addx 3",
		"addx 4",
		"addx -35",
		"addx -2",
		"noop",
		"addx 20",
		"addx -13",
		"addx -2",
		"addx 5",
		"addx 2",
		"addx 23",
		"addx -18",
		"addx -2",
		"addx 17",
		"addx -10",
		"addx 17",
		"noop",
		"addx -12",
		"addx 3",
		"addx -2",
		"addx 2",
		"noop",
		"addx 3",
		"addx 2",
		"noop",
		"addx -13",
		"addx -20",
		"noop",
		"addx 1",
		"addx 2",
		"addx 5",
		"addx 2",
		"addx 5",
		"noop",
		"noop",
		"noop",
		"noop",
		"noop",
		"addx 1",
		"addx 2",
		"addx -18",
		"noop",
		"addx 26",
		"addx -1",
		"addx 6",
		"noop",
		"noop",
		"noop",
		"addx 4",
		"addx 1",
		"noop",
		"noop",
		"noop",
		"noop",
	];

	const run = () => {
		const lines = [];
		for (var i = 0; i < data.length; i++) {
			lines.push(data[i]);
		}

		const parts = lines.map((x) => x.split(" "));

		const xValues = parts.reduce(
			(xValues, part) => {
				const last = xValues.slice(-1)[0];

				const instruction = part[0];
				const value = Number(part[1]);

				if (instruction === "addx") {
					return xValues.concat({ sum: last.sum + Number(value), cycle: last.cycle + 2 });
				} else {
					return xValues.concat({ sum: last.sum, cycle: last.cycle + 1 });
				}
			},
			[{ sum: 1, cycle: 2 }],
		);

		const result = [20, 60, 100, 140, 180, 220].reduce((total, cycle) => {
			const row = xValues.filter((x) => x.cycle >= cycle)[0];
			const sum = row.sum;
			const strength = sum * cycle;

			return total + strength;
		}, 0);

		console.log(result);
	};

	run();
};

day_10_1();
