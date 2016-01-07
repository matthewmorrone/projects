var app, NekNek;
NekNek = new function ()
{
	var B, A = this;
	A.UniqueP = function (C)
	{
		var E, D;
		for (E = 0; E < C.length; E++)
		{
			for (D = E + 1; D < C.length; D++)
			{
				if (C[E] == C[D])
				{
					return false
				}
			}
		}
		return true
	};
	A.CanMakeSumP = function (M, G)
	{
		var K, E, J, D, L, H, C, I, F;
		if (M < G.length)
		{
			return false
		}
		switch (G.length)
		{
		case 1:
			K = G[0];
			for (E = K.length - 1; E >= 0; E--)
			{
				if (K[E] == M)
				{
					return true
				}
			}
			return false;
		case 2:
			K = G[0];
			J = G[1];
			for (E = K.length - 1; E >= 0; E--)
			{
				if (K[E] >= M)
				{
					continue
				}
				L = M - K[E];
				for (D = J.length - 1; D >= 0; D--)
				{
					if (J[D] == L)
					{
						return true
					}
				}
			}
			return false;
		case 3:
			K = G[0];
			J = G[1];
			H = G[2];
			for (E = K.length - 1; E >= 0; E--)
			{
				if (K[E] >= (M - 1))
				{
					continue
				}
				L = M - K[E];
				for (D = J.length - 1; D >= 0; D--)
				{
					if (J[D] >= L)
					{
						continue
					}
					I = L - J[D];
					for (C = H.length - 1; C >= 0; C--)
					{
						if (H[C] == I)
						{
							return true
						}
					}
				}
			}
			return false;
		default:
			K = G[0];
			F = G.slice(1);
			for (E = K.length - 1; E >= 0; E--)
			{
				if (K[E] >= M)
				{
					continue
				}
				if (A.CanMakeSumP(M - K[E], F))
				{
					return true
				}
			}
			return false
		}
	};
	A.CanMakeDiffP = function (L, G, C)
	{
		var J, E, I, D, K, H, F;
		if (L > C - G.length + 1)
		{
			return false
		}
		switch (G.length)
		{
		case 1:
			J = G[0];
			for (E = J.length - 1; E >= 0; E--)
			{
				if (J[E] == L)
				{
					return true
				}
			}
			return false;
		case 2:
			J = G[0];
			I = G[1];
			for (E = J.length - 1; E >= 0; E--)
			{
				K = J[E] - L;
				H = L + J[E];
				for (D = I.length - 1; D >= 0; D--)
				{
					if ((I[D] == K) || (I[D] == H))
					{
						return true
					}
				}
			}
			return false;
		default:
			J = G[0];
			F = G.slice(1);
			for (E = J.length - 1; E >= 0; E--)
			{
				if ((J[E] > L) && A.CanMakeSumP(J[E] - L, F))
				{
					return true
				}
				if (A.CanMakeDiffP(L + J[E], F, C))
				{
					return true
				}
			}
			return false
		}
	};
	A.CanMakeProdP = function (M, G)
	{
		var K, E, J, D, L, H, C, I, F;
		switch (G.length)
		{
		case 1:
			K = G[0];
			for (E = K.length - 1; E >= 0; E--)
			{
				if (K[E] == M)
				{
					return true
				}
			}
			return false;
		case 2:
			K = G[0];
			J = G[1];
			for (E = K.length - 1; E >= 0; E--)
			{
				if (M % K[E])
				{
					continue
				}
				L = M / K[E];
				for (D = J.length - 1; D >= 0; D--)
				{
					if (J[D] == L)
					{
						return true
					}
				}
			}
			return false;
		case 3:
			K = G[0];
			J = G[1];
			H = G[2];
			for (E = K.length - 1; E >= 0; E--)
			{
				if (M % K[E])
				{
					continue
				}
				L = M / K[E];
				for (D = J.length - 1; D >= 0; D--)
				{
					if (L % J[D])
					{
						continue
					}
					I = L / J[D];
					for (C = H.length - 1; C >= 0; C--)
					{
						if (H[C] == I)
						{
							return true
						}
					}
				}
			}
			return false;
		default:
			K = G[0];
			F = G.slice(1);
			for (E = K.length - 1; E >= 0; E--)
			{
				if (M % K[E])
				{
					continue
				}
				if (A.CanMakeProdP(M / K[E], F))
				{
					return true
				}
			}
			return false
		}
	};
	A.CanMakeQuotP = function (L, G, C)
	{
		var J, E, I, D, K, H, F;
		if (L > C)
		{
			return false
		}
		switch (G.length)
		{
		case 1:
			J = G[0];
			for (E = J.length - 1; E >= 0; E--)
			{
				if (J[E] == L)
				{
					return true
				}
			}
			return false;
		case 2:
			J = G[0];
			I = G[1];
			for (E = J.length - 1; E >= 0; E--)
			{
				K = J[E] / L;
				H = L * J[E];
				for (D = I.length - 1; D >= 0; D--)
				{
					if ((I[D] == K) || (I[D] == H))
					{
						return true
					}
				}
			}
			return false;
		default:
			J = G[0];
			F = G.slice(1);
			for (E = J.length - 1; E >= 0; E--)
			{
				if ((!J[E] % L) && A.CanMakeProdP(J[E] / L, F))
				{
					return true
				}
				if (A.CanMakeQuotP(L * J[E], F, C))
				{
					return true
				}
			}
			return false
		}
	};
	A.PrintSolution = function (D, J)
	{
		var E, I, F, G, C, H;
		F = "ABCDEFGHI".slice(0, J);
		G = "123456789".slice(0, J);
		for (C = [], E = 0; E < J; E++)
		{
			for (H = [], I = 0; I < J; I++)
			{
				H.push(D[F.charAt(E) + G.charAt(I)])
			}
			C.push(H.join(" | "))
		}
		alert(C.join("\n"))
	};
	A.Constraint = function (E, D, F, C)
	{
		if (!A.UniqueP(C))
		{
			throw new Error("Duplicate cells in constraint: " + F + "/" + C)
		}
		this.type = E;
		this.size = D;
		this.value = parseInt(F);
		this.cells = C.slice();
		this.cells.sort()
	};
	B = A.Constraint.prototype;
	B.print_lut = {
		"+": "+",
		"-": "-",
		"*": "x",
		"/": "/",
		"!": "=",
		"?": ""
	};
	B.Copy = function ()
	{
		return new A.Constraint(this.type, this.size, this.value, this.cells)
	};
	B.Print = function (D)
	{
		var C = isNaN(this.value) ? "???" : this.value + this.print_lut[this.type];
		if (D)
		{
			return C + " constraint for cell(s) [" + this.cells.join(",") + "]"
		}
		else
		{
			return C
		}
	};
	B.Export = function ()
	{
		return this.type + "\t" + (isNaN(this.value) ? "???" : this.value) + "\t" + this.cells.join(" ")
	};
	B.Validate = function ()
	{
		if (isNaN(parseInt(this.value)))
		{
			return
		}
		switch (this.type)
		{
		case "?":
			break;
		case "+":
		case "*":
		case "-":
		case "/":
			if (this.cells.length < 2)
			{
				return this.Print(true) + " must be applied to at least 2 cells"
			}
			break;
		case "!":
			if (this.cells.length != 1)
			{
				return this.Print(true) + " must be applied to exactly 1 cell"
			}
			break;
		default:
			return ["Constraint for cell(s) [", this.cells.join(","), "] is of an unknown type"].join("")
		}
	};
	B.CheckSum = function (D, C)
	{
		return (this.value > D) && A.CanMakeSumP(this.value - D, C)
	};
	B.CheckDiff = function (D, C)
	{
		return ((D > this.value) && A.CanMakeSumP(D - this.value, C)) || A.CanMakeDiffP(this.value + D, C, this.size)
	};
	B.CheckProd = function (D, C)
	{
		return !(this.value % D) && A.CanMakeProdP(this.value / D, C)
	};
	B.CheckDiv = function (D, C)
	{
		return (!(D % this.value) && A.CanMakeProdP(D / this.value, C)) || A.CanMakeQuotP(this.value * D, C, this.size)
	};
	B.CheckAny = function (D, C)
	{
		return this.CheckSum(D, C) || this.CheckDiff(D, C) || this.CheckProd(D, C) || this.CheckDiv(D, C)
	};
	B.Restrict = function (J)
	{
		var I, F, K, H, D, L, E, G, C;
		switch (this.type)
		{
		case "+":
			I = this.CheckSum;
			break;
		case "*":
			I = this.CheckProd;
			break;
		case "-":
			I = this.CheckDiff;
			break;
		case "/":
			I = this.CheckDiv;
			break;
		case "?":
			I = this.CheckAny;
			break;
		default:
			return []
		}
		F = [];
		for (H = this.cells.length - 1; H >= 0; H--)
		{
			D = this.cells[H];
			L = J[D];
			E = [];
			for (G = this.cells.length - 1; G >= 0; G--)
			{
				if (H != G)
				{
					E.push(J[this.cells[G]])
				}
			}
			F.push([D, C = []]);
			for (G = L.length - 1; G >= 0; G--)
			{
				K = L[G];
				if (I.call(this, K, E))
				{
					C.unshift(K)
				}
			}
		}
		return F
	};
	A.Set = function ()
	{
		this.cells = []
	};
	B = A.Set.prototype;
	B.Remove = function (H, J, C, G)
	{
		var F, E, I, D;
		for (F = H.length - 1; F >= 0; F--)
		{
			I = H[F];
			D = I[1];
			if (I[0] == J)
			{
				J = undefined
			}
			if (I[0] == C)
			{
				continue
			}
			for (E = D.length - 1; E >= 0; E--)
			{
				if (D[E] == G)
				{
					I[1] = D.slice(0, E).concat(D.slice(E + 1));
					if (J && (D.length == 2))
					{
						this.Remove(H, J, I[0], I[1][0])
					}
					break
				}
			}
		}
	};
	B.Restrict = function (C)
	{
		var E, G, D, F = [];
		for (E = this.cells.length - 1; E >= 0; E--)
		{
			F.push([this.cells[E], C[this.cells[E]]])
		}
		for (E = F.length - 1; E >= 0; E--)
		{
			G = F[E];
			D = G[1];
			if (D.length == 1)
			{
				this.Remove(F, G[0], G[0], G[1][0])
			}
		}
		return F
	};
	A.Puzzle = function (C)
	{
		this.size = 0;
		this.cages = [];
		if (C)
		{
			this.Load(C)
		}
	};
	B = A.Puzzle.prototype;
	B.fmtError = new Error('Puzzle definitions must begin with a size ("#") line');
	B.Load = function (G)
	{
		var F, D, E, C = G.split("\n");
		E = C[0].split(/\s/);
		if (E[0] != "#")
		{
			throw A.Puzzle.prototype.fmtError
		}
		this.size = parseInt(E[1]);
		for (F = 1; F < C.length; F++)
		{
			D = C[F].split(/\s/);
			this.cages.push(new A.Constraint(D[0], this.size, D[1], D.slice(2)))
		}
	};
	B.Export = function ()
	{
		var D, C = ["#\t" + this.size];
		for (D = 0; D < this.cages.length; D++)
		{
			C.push(this.cages[D].Export())
		}
		return C.join("\n")
	};
	B.Validate = function ()
	{
		var D, E, C = [];
		for (D = 0; D < this.cages.length; D++)
		{
			E = this.cages[D].Validate();
			if (E)
			{
				C.push(E)
			}
		}
		return C.join("\n")
	};
	A.Board = function (C)
	{
		if (C)
		{
			this.Load(C)
		}
	};
	B = A.Board.prototype;
	B.MakeName = function (D, E)
	{
		var C = this.codeLut[D];
		if (C)
		{
			return C[E]
		}
	};
	B.MakeCode = function (C)
	{
		return this.nameLut[C]
	};
	B.FindContiguousRegions = function (G)
	{
		var I, H, F, E, D, K, C, J;
		for (I = 0, F = []; I < G.cells.length; I++)
		{
			E = G.cells[I];
			if (this.d_cells[E] != G)
			{
				continue
			}
			F.push(D = this.d_cells[E] = new A.Constraint(G.type, G.size, G.value, [E]));
			for (H = 0; H < D.cells.length; H++)
			{
				K = this.MakeCode(D.cells[H]);
				C = K[0];
				J = K[1];
				E = this.MakeName(C - 1, J);
				if (this.d_cells[E] == G)
				{
					this.d_cells[E] = D;
					D.cells.push(E)
				}
				E = this.MakeName(C, J + 1);
				if (this.d_cells[E] == G)
				{
					this.d_cells[E] = D;
					D.cells.push(E)
				}
				E = this.MakeName(C + 1, J);
				if (this.d_cells[E] == G)
				{
					this.d_cells[E] = D;
					D.cells.push(E)
				}
				E = this.MakeName(C, J - 1);
				if (this.d_cells[E] == G)
				{
					this.d_cells[E] = D;
					D.cells.push(E)
				}
			}
			D.cells.sort()
		}
		return F
	};
	B.Load = function (H)
	{
		this.size = H.size;
		this.rows = "ABCDEFGHI".slice(0, H.size);
		this.cols = "123456789".slice(0, H.size);
		this.codeLut = [];
		this.nameLut = {};
		this.d_cells = {};
		this.d_descs = {};
		var G, F, D, E, C;
		for (G = 0; G < H.cages.length; G++)
		{
			D = H.cages[G].Copy();
			for (F = 0; F < D.cells.length; F++)
			{
				this.d_cells[D.cells[F]] = D
			}
		}
		for (G = 0; G < this.rows.length; G++)
		{
			this.codeLut.push(C = []);
			for (F = 0; F < this.cols.length; F++)
			{
				E = this.rows.charAt(G) + this.cols.charAt(F);
				C.push(E);
				this.nameLut[E] = [G, F];
				if (!this.d_cells[E])
				{
					this.d_cells[E] = new A.Constraint("!", H.size, NaN, [E])
				}
			}
		}
	};
	B.Move = function (D, C, E)
	{
		if (!E)
		{
			E = new A.Constraint(D.type, D.size, D.value, [])
		}
		E.cells.push(C);
		E.cells.sort();
		this.d_cells[C] = E;
		this.FindContiguousRegions(D);
		return E
	};
	B.Describe = function (G, K)
	{
		var H, C, J, E, F, D, I, L = [];
		if (K == undefined)
		{
			K = [];
			for (C = 0; C < this.rows.length; C++)
			{
				for (J = 0; J < this.cols.length; J++)
				{
					K.push(this.MakeName(C, J))
				}
			}
		}
		for (H = 0; H < K.length; H++)
		{
			E = K[H];
			F = this.MakeCode(E);
			C = F[0];
			J = F[1];
			D = this.d_cells[E];
			I = (E == D.cells[0]) ? 32 : 0;
			if (this.d_cells[this.MakeName(C - 1, J)] != D)
			{
				I += 16
			}
			if (this.d_cells[this.MakeName(C, J + 1)] != D)
			{
				I += 8
			}
			if (this.d_cells[this.MakeName(C + 1, J)] != D)
			{
				I += 4
			}
			if (this.d_cells[this.MakeName(C, J - 1)] != D)
			{
				I += 2
			}
			if (G == D)
			{
				I += 1
			}
			if (this.d_descs[E] != I)
			{
				this.d_descs[E] = I;
				L.push(
				{
					r: C,
					c: J,
					name: E,
					cage: D,
					desc: I
				})
			}
		}
		return L
	};
	B.MakePuzzle = function ()
	{
		var F, E, D, C, G = [];
		for (F = 0; F < this.rows.length; F++)
		{
			for (E = 0; E < this.cols.length; E++)
			{
				D = this.MakeName(F, E);
				C = this.d_cells[D];
				if (C.cells[0] == D)
				{
					G.push(C)
				}
			}
		}
		B = new A.Puzzle();
		B.size = this.size;
		B.cages = G;
		return B
	};
	A.Solve = function (E)
	{
		var N, T, R, Q, L, U, G, D, H, J, C, M, I, S, K;
		H = "ABCDEFGHI".slice(0, B.size);
		J = "123456789".slice(0, B.size);
		C = [1, 2, 3, 4, 5, 6, 7, 8, 9].slice(0, B.size);
		M = [];
		I = [];
		S = {};
		K = {};
		for (N = H.length - 1; N >= 0; N--)
		{
			L = new A.Set();
			for (T = J.length - 1; T >= 0; T--)
			{
				M.push(U = H.charAt(N) + J.charAt(T));
				L.cells.push(U);
				S[U] = [I.length]
			}
			I.push(L)
		}
		for (T = J.length - 1; T >= 0; T--)
		{
			L = new A.Set();
			for (N = H.length - 1; N >= 0; N--)
			{
				U = H.charAt(N) + J.charAt(T);
				L.cells.push(U);
				S[U].push(I.length)
			}
			I.push(L)
		}
		for (R = M.length - 1; R >= 0; R--)
		{
			K[M[R]] = C
		}
		for (R = E.cages.length - 1; R >= 0; R--)
		{
			G = E.cages[R];
			D = G.cells;
			if (isNaN(parseInt(G.value)))
			{
				continue
			}
			if (D.length == 1)
			{
				K[D[0]] = [G.value]
			}
			else
			{
				for (Q = D.length - 1; Q >= 0; Q--)
				{
					S[D[Q]].push(I.length)
				}
				I.push(G)
			}
		}

		function O(f, a)
		{
			var e, d, X, Y, c, W, g, b, V, Z = {};
			for (e = a.length - 1; e >= 0; e--)
			{
				Z[a[e]] = true
			}
			while (a.length)
			{
				X = a.pop();
				Y = I[X].Restrict(f);
				for (e = Y.length - 1; e >= 0; e--)
				{
					c = Y[e];
					W = c[0];
					g = c[1];
					if (!g.length)
					{
						return false
					}
					if (f[W].length == g.length)
					{
						continue
					}
					f[W] = g;
					for (b = S[W], d = b.length - 1; d >= 0; d--)
					{
						V = b[d];
						if (!Z[V])
						{
							Z[V] = true;
							a.push(V)
						}
					}
				}
				Z[X] = false
			}
			return f
		}

		function P(W, V, X)
		{
			W[V] = [X];
			return O(W, S[V].slice())
		}

		function F(W)
		{
			var c, a, X, Z, b, Y = 999,
				V = undefined;
			if (!W)
			{
				return false
			}
			for (c = M.length - 1; c >= 0; c--)
			{
				X = W[M[c]].length;
				if (X == 1)
				{
					continue
				}
				if (X < Y)
				{
					Y = X;
					V = M[c]
				}
			}
			if (!V)
			{
				return W
			}
			for (Z = W[V], c = Z.length - 1; c >= 0; c--)
			{
				b = {};
				for (a = M.length - 1; a >= 0; a--)
				{
					b[M[a]] = W[M[a]]
				}
				if (b = F(P(b, V, Z[c])))
				{
					return b
				}
			}
			return false
		}
		for (L = [], R = I.length - 1; R >= 0; R--)
		{
			L.push(R)
		}
		return F(O(K, L))
	}
}();

function App(D)
{
	var B, C, A;
	this.board = new NekNek.Board();
	this.active = undefined;
	this.solution = undefined;
	A = document.getElementById("load");
	while (A.firstChild)
	{
		A.removeChild(A.firstChild)
	}
	for (B = 0; B < this.boards.length; B++)
	{
		C = A.appendChild(document.createElement("OPTION"));
		C.appendChild(document.createTextNode(this.boards[B][0]));
		C.value = B
	}
	A.selectedIndex = (D %= this.boards.length);
	document.getElementById("load").onchange = this.MakeLoadHook();
	document.getElementById("reset").onclick = this.MakeLoadHook();
	document.getElementById("solve").onclick = this.MakeSolveHook();
	document.getElementById("generate").onclick = this.MakeGenerateHook();
	document.getElementById("cage_type").onchange = this.MakeUpdateHook();
	document.getElementById("cage_value").onkeyup = this.MakeUpdateHook();
	this.Load();
	setTimeout(function ()
	{
		A.selectedIndex = D
	}, 0)
}
App.prototype.boards = [
	["New 3x3 Map", "#	3"],
	["New 4x4 Map", "#	4"],
	["New 5x5 Map", "#	5"],
	["New 6x6 Map", "#	6"],
	["New 7x7 Map", "#	7"],
	["New 8x8 Map", "#	8"],
	["New 9x9 Map", "#	9"],
	["Demo 3x3 Map", ["#	3", "+	3	A1 B1", "+	5	A2 B2", "!	1	A3", "+	5	B3 C3", "+	4	C1 C2"].join("\n")],
	["Demo 6x6 Map", ["#	6", "+	13	A1 A2 B1 B2", "*	180	A3 A4 A5 B4", "+	9	A6 B6 C6", "!	2	B3", "*	20	B5 C5", "+	15	C1 D1 E1", "*	6	C2 C3", "+	11	C4 D3 D4", "!	3	D2", "+	9	D5 D6 E4 E5", "/	2	E2 E3", "+	18	E6 F4 F5 F6", "+	8	F1 F2 F3"].join("\n")],
	["Demo 9x9 Map", ["#	9", "*	240	A1 B1 A2", "+	12	B2 A3 B3", "!	9	A4", "-	5	A5 A6", "*	72	A7 B7", "+	7	A8 B8 C8", "/	2	A9 B9", "*	56	C3 B4 C4", "+	11	B5 B6", "/	2	C1 C2", "+	10	C5 C6 D6", "*	42	C7 D7 D8", "+	27	C9 D9 E9 F9 G9", "/	2	D1 E1", "+	19	D2 D3 D4", "+	16	D5 E5 F5", "!	3	E2", "-	1	E3 E4", "+	24	E6 E7 E8", "*	252	F1 G1 G2 G3", "+	6	F2 F3 F4", "*	216	F6 G5 G6", "+	15	F7 G7 F8", "+	16	G4 H4 I4", "*	90	G8 H8 I8", "+	23	H1 I1 I2", "+	15	H2 H3 I3", "-	3	H5 H6", "*	12	H7 I7", "-	7	H9 I9", "-	2	I5 I6"].join("\n")]
];
App.prototype.MakeLoadHook = function ()
{
	var A = this;
	return function ()
	{
		A.Load()
	}
};
App.prototype.MakeSolveHook = function ()
{
	var A = this;
	return function ()
	{
		A.Solve()
	}
};
App.prototype.MakeGenerateHook = function ()
{
	var A = this;
	return function ()
	{
		A.Generate()
	}
};
App.prototype.MakeBoardHook = function (B, D, A)
{
	var C = this;
	return function ()
	{
		C.UpdateBoard(B, D, A)
	}
};
App.prototype.MakeUpdateHook = function ()
{
	var A = this;
	return function ()
	{
		A.UpdateActiveCage()
	}
};
App.prototype.Load = function ()
{
	var A = document.getElementById("load");
	this.board.Load(new NekNek.Puzzle(this.boards[A.selectedIndex][1]));
	this.active = this.board.d_cells.A1;
	this.solution = undefined;
	this.RenderCageControls();
	this.RenderBoard(this.board.Describe(this.active))
};
App.prototype.UpdateBoard = function (E, F, C)
{
	var B, D = this.board,
		A = D.d_cells[C];
	if (this.solution)
	{
		this.solution = undefined;
		this.RenderSolution()
	}
	if (!this.active)
	{
		B = A.cells;
		this.active = A;
		this.RenderCageControls()
	}
	else
	{
		if (A == this.active)
		{
			B = A.cells;
			this.active = D.Move(A, C);
			this.RenderCageControls()
		}
		else
		{
			if (D.d_cells[D.MakeName(E - 1, F)] == this.active || D.d_cells[D.MakeName(E, F + 1)] == this.active || D.d_cells[D.MakeName(E + 1, F)] == this.active || D.d_cells[D.MakeName(E, F - 1)] == this.active)
			{
				B = A.cells.concat(this.active.cells);
				D.Move(A, C, this.active)
			}
			else
			{
				B = A.cells.concat(this.active.cells);
				this.active = A;
				this.RenderCageControls()
			}
		}
	}
	this.RenderUpdates(D.Describe(this.active, B))
};
App.prototype.UpdateActiveCage = function ()
{
	var A, B, C;
	if (this.solution)
	{
		this.solution = undefined;
		this.RenderSolution()
	}
	A = document.getElementById("cage_type");
	B = A.options[A.selectedIndex].value;
	C = parseInt(document.getElementById("cage_value").value);
	this.active.type = B;
	this.active.value = C;
	this.RenderCageLabel()
};
App.prototype.Solve = function ()
{
	var C, B, A;
	if (this.solution)
	{
		return
	}
	C = this.board.MakePuzzle();
	if (B = C.Validate())
	{
		alert(B);
		return
	}
	if (A = NekNek.Solve(C))
	{
		this.solution = A;
		this.RenderSolution()
	}
	else
	{
		alert("No solution could be found for this puzzle.")
	}
};
App.prototype.Generate = function ()
{
	var E, D, C, B, F, A;
	E = this.board.MakePuzzle();
	if (D = E.Validate())
	{
		alert(D);
		return
	}
	if (!(C = NekNek.Solve(E)))
	{
		alert("No solution could be found for this puzzle.");
		return
	}
	A = [];
	for (B = 0; B < E.size; B++)
	{
		for (F = 0; F < E.size; F++)
		{
			A.push(C[this.board.MakeName(B, F)][0])
		}
	}
	window.location.href = "play.php?puzzle=" + escape(E.Export().replace(/\n/g, "..").replace(/\s/g, ".")) + "&solution=" + escape(A.join("."))
};
App.prototype.RenderCageControls = function ()
{
	var C, B = this.active,
		A = document.getElementById("cage_type");
	for (C = 0; C < A.options.length; C++)
	{
		if (A.options[C].value == B.type)
		{
			A.selectedIndex = C;
			break
		}
	}
	if (!isNaN(B.value))
	{
		document.getElementById("cage_value").value = B.value
	}
	else
	{
		document.getElementById("cage_value").value = ""
	}
};
App.prototype.RenderCageLabel = function ()
{
	var C, B, F, D, E, A;
	C = document.getElementById("test_div");
	B = this.active;
	F = this.board.MakeCode(B.cells[0]);
	D = F[0];
	E = F[1];
	A = C.firstChild.firstChild.childNodes[D + 1].childNodes[E + 1];
	A.firstChild.firstChild.firstChild.nodeValue = B.Print()
};
App.prototype.RenderSolution = function ()
{
	var E, H, C, G, B, D, F, A;
	C = this.solution;
	G = this.board.size;
	B = document.getElementById("test_div");
	D = B.firstChild.firstChild.childNodes;
	for (E = 0; E < G; E++)
	{
		F = D[E + 1].childNodes;
		for (H = 0; H < G; H++)
		{
			A = F[H + 1];
			if (C)
			{
				A.appendChild(document.createTextNode(C[this.board.MakeName(E, H)]))
			}
			else
			{
				A.removeChild(A.childNodes[1])
			}
		}
	}
};
App.prototype.MakeCell = function (D)
{
	var A, C, B;
	A = document.createElement("TD");
	A.className = "board_cell";
	A.onclick = this.MakeBoardHook(D.r, D.c, D.name);
	A.style.borderTopColor = D.desc & 16 ? "black" : "#ddd";
	A.style.borderTopStyle = D.desc & 16 ? "solid" : "dotted";
	A.style.borderRightColor = D.desc & 8 ? "black" : "#ddd";
	A.style.borderRightStyle = D.desc & 8 ? "solid" : "dotted";
	A.style.borderBottomColor = D.desc & 4 ? "black" : "#ddd";
	A.style.borderBottomStyle = D.desc & 4 ? "solid" : "dotted";
	A.style.borderLeftColor = D.desc & 2 ? "black" : "#ddd";
	A.style.borderLeftStyle = D.desc & 2 ? "solid" : "dotted";
	if (D.desc & 1)
	{
		A.style.background = "#cfe"
	}
	C = A.appendChild(document.createElement("P"));
	B = (D.desc & 32) ? D.cage.Print() : "\u00a0";
	C.appendChild(document.createElement("SPAN"));
	C.firstChild.appendChild(document.createTextNode(B));
	C.className = "cage_header";
	return A
};
App.prototype.RenderUpdates = function (D)
{
	var B, E, C, A;
	C = document.getElementById("test_div").firstChild;
	A = C.firstChild;
	for (B = 0; B < D.length; B++)
	{
		E = A.childNodes[D[B].r + 1];
		E.replaceChild(this.MakeCell(D[B]), E.childNodes[D[B].c + 1])
	}
	C.removeChild(A);
	C.appendChild(A)
};
App.prototype.RenderBoard = function (G)
{
	var C, J, F, I, H, A, E, D, B = 0;
	C = document.createElement("TBODY");
	J = this.board.rows;
	F = this.board.cols;
	I = C.appendChild(document.createElement("TR"));
	I.appendChild(document.createElement("TD"));
	for (E = 0; E < F.length; E++)
	{
		H = I.appendChild(document.createElement("TD"));
		H.className = "board_header";
		H.appendChild(document.createTextNode(F.charAt(E)))
	}
	for (A = 0; A < J.length; A++)
	{
		I = C.appendChild(document.createElement("TR"));
		H = I.appendChild(document.createElement("TD"));
		H.className = "board_header";
		H.appendChild(document.createTextNode(J.charAt(A)));
		for (E = 0; E < F.length; E++)
		{
			I.appendChild(this.MakeCell(G[B++]))
		}
	}
	D = document.getElementById("test_div");
	while (D.firstChild)
	{
		D.removeChild(D.firstChild)
	}
	D.appendChild(document.createElement("TABLE")).appendChild(C)
};
app = new App(8);
