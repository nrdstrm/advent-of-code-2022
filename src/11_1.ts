const day_11_1 = () => {
	const data = `
	    Monkey 0:
	    Starting items: 93, 54, 69, 66, 71
	    Operation: new = old * 3
	    Test: divisible by 7
	        If true: throw to monkey 7
	        If false: throw to monkey 1

	    Monkey 1:
	    Starting items: 89, 51, 80, 66
	    Operation: new = old * 17
	    Test: divisible by 19
	        If true: throw to monkey 5
	        If false: throw to monkey 7

	    Monkey 2:
	    Starting items: 90, 92, 63, 91, 96, 63, 64
	    Operation: new = old + 1
	    Test: divisible by 13
	        If true: throw to monkey 4
	        If false: throw to monkey 3

	    Monkey 3:
	    Starting items: 65, 77
	    Operation: new = old + 2
	    Test: divisible by 3
	        If true: throw to monkey 4
	        If false: throw to monkey 6

	    Monkey 4:
	    Starting items: 76, 68, 94
	    Operation: new = old * old
	    Test: divisible by 2
	        If true: throw to monkey 0
	        If false: throw to monkey 6

	    Monkey 5:
	    Starting items: 86, 65, 66, 97, 73, 83
	    Operation: new = old + 8
	    Test: divisible by 11
	        If true: throw to monkey 2
	        If false: throw to monkey 3

	    Monkey 6:
	    Starting items: 78
	    Operation: new = old + 6
	    Test: divisible by 17
	        If true: throw to monkey 0
	        If false: throw to monkey 1

	    Monkey 7:
	    Starting items: 89, 57, 59, 61, 87, 55, 55, 88
	    Operation: new = old + 7
	    Test: divisible by 5
	        If true: throw to monkey 2
	        If false: throw to monkey 5
	`;

	const run = () => {
		const blocks = data.trim().split("\n\n");

		const monkeys = blocks.map((monkey) => {
			const parts = monkey.split("\n");

			const id = Number(parts[0].match(/[0-9]+/)![0]);
			const items = parts[1].match(/[0-9]+/g)!.map(Number);
			const operation = parts[2].split("= ")[1];
			const test = Number(parts[3].match(/[0-9]+/)![0]);
			const testTrue = Number(parts[4].match(/[0-9]+/)![0]);
			const testFalse = Number(parts[5].match(/[0-9]+/)![0]);

			return {
				id,
				items,
				operation,
				test,
				testTrue,
				testFalse,
				count: 0,
			};
		});

		const worryLevel = 3;

		for (let i = 0; i < 20; i++) {
			for (const monkey of monkeys) {
				// inspect each item
				while (monkey.items.length > 0) {
					monkey.count++;

					const item = monkey.items.shift();
					const value = Math.floor(eval(`const old = ${item}; ${monkey.operation};`) / worryLevel);

					if (value % monkey.test === 0) {
						monkeys[monkey.testTrue].items.push(value);
					} else {
						monkeys[monkey.testFalse].items.push(value);
					}
				}
			}
		}

		monkeys.sort((a, b) => b.count - a.count);
		const result = monkeys[0].count * monkeys[1].count;

		console.log(result);
	};

	run();
};

day_11_1();
