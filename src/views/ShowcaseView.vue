<template>
	<html>
		<head> </head>

		<body>
			<div id="contenedor">
				<div class="bloque1">
					<p>Este es el Bloque 1 dentro del contenedor.</p>
				</div>

				<div class="bloque2">
					<p>
						Este es el contenido del Bloque 2 dentro del contenedor, este contiene mas texto, por
						eso debe ser mas largo.
					</p>
				</div>

				<div class="clear"></div>
			</div>

			<div class="bloque1">
				<p>Este es el Bloque 1 fuera del contenedor.</p>
			</div>

			<div class="bloque2">
				<p>Este es el Bloque 2 fuera del contenedor.</p>
			</div>

			<div class="v-container">
				<div
					v-for="({ id, name, roles }, idx) in myArray"
					:key="id"
					:style="{ backgroundColor: !isEven(idx) && '#e6e6e6' }"
				>
					<p v-show="!isEven(idx)">Nombre: {{ name }}, roles: {{ roles.join(", ") }}</p>
				</div>
			</div>

			<div class="btn" @click="calculateOutput">Generar</div>

			<div class="output">{{ output }}</div>
		</body>
	</html>
</template>

<script>
export default {
	name: "SupportView",
	components: {},
	data() {
		return {
			myArray: [
				{ id: 1, name: "Carlos", roles: [1, 2] },
				{ id: 2, name: "Sebastian", roles: [1, 3] },
				{ id: 3, name: "Andres", roles: [2, 3] },
				{ id: 4, name: "Paola", roles: [1, 2, 3] },
				{ id: 5, name: "David", roles: [3, 4] },
			],
			output: "",
		};
	},
	computed: {},
	methods: {
		isEven(number) {
			return number % 2 === 0;
		},
		calculateOutput() {
			this.output = `El total de listado es : ${this.myArray.length}`;
		},
	},
};
</script>

<style type="text/css" scoped>
.clear {
	clear: both;
}

/* Completar aquí la respuesta  */

body {
	text-align: center;
}

#contenedor {
	width: 600px;
	margin: 0 auto;
	padding: 10px;
	margin-bottom: 10px;
	border: dashed 1px gray;
	overflow: auto;
}

#contenedor .bloque1 {
	width: 100px;
	margin-top: 70px;
}

#contenedor .bloque1 p {
	font-style: italic;
}

#contenedor .bloque2 {
	width: 100px;
}

#contenedor div {
	margin: 5px;
	float: left;
}

.bloque1 {
	background-color: red;
	color: white;
}

.bloque2 {
	background-color: yellow;
	color: black;
	font-weight: bold;
}

p {
	padding: 10px;
}

body > .bloque1,
body > .bloque2 {
	float: none;
}

.btn {
	cursor: pointer;
}
</style>
