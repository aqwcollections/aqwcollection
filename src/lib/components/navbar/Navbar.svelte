<script lang="ts">
	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	let mobile: boolean = false;
	let items: boolean = false;
	let features: boolean = false;

	function handleMobile() {
		mobile = !mobile;
	}

	function handleItems() {
		if (features) features = false;
		items = !items;
	}

	function handleFeatures() {
		if (items) items = false;
		features = !features;
	}
</script>

<navbar
	class="fixed top-0 z-10 px-11 py-4 w-full bg-white bg-opacity-95 border-b backdrop-filter backdrop-blur-lg border-gray-900/10 font-montserrat"
>
	<div class="flex justify-between items-center">
		<div class="flex justify-start items-center space-x-2 w-1/3">
			<span class="inline"><p class="text-gray-800">AQWorld Collections</p></span>
		</div>
		<div class="hidden w-1/3 lg:inline">
			<input
				type="search"
				class="px-6 py-2 w-full text-sm text-gray-600 rounded-md outline-none bg-gray-300/30 placeholder:font-medium"
				placeholder="Search"
			/>
		</div>
		<!-- Device -->
		<div class="hidden w-1/3 md:justify-end md:flex">
			<ul class="flex space-x-8 text-sm font-semibold leading-6 text-gray-700">
				<li><a class="hover:text-base-400" href="/">Home</a></li>
				<li>
					<p class="cursor-pointer hover:text-base-400" on:click={handleItems}>Items</p>
					{#if items}
						<div
							class="pl-3 pr-3 mt-[1.46rem] py-3 bg-gray-300/20 fixed space-y-2 w-40 rounded-b-md"
							transition:slide={{ duration: 300, easing: quintOut }}
						>
							<li><a class="hover:text-base-400" href="/">Weapon</a></li>
							<li><a class="hover:text-base-400" href="/items">Armor</a></li>
							<li><a class="hover:text-base-400" href="/">Helmet</a></li>
							<li><a class="hover:text-base-400" href="/">Cape</a></li>
							<li><a class="hover:text-base-400" href="/">Pet</a></li>
						</div>
					{/if}
				</li>
				<li>
					<p class="cursor-pointer hover:text-base-400" on:click={handleFeatures}>Features</p>
					{#if features}
						<div
							class="pl-3 pr-7 mt-[1.46rem] py-3 bg-gray-300/20 fixed space-y-2 w-40 rounded-b-md"
							transition:slide={{ duration: 300, easing: quintOut }}
						>
							<li><a class="hover:text-base-400" href="/">Rate Character</a></li>
							<li><a class="hover:text-base-400" href="/items">Need Help</a></li>
						</div>
					{/if}
				</li>
				<li><a class="hover:text-base-400" href="/about">About</a></li>
			</ul>
		</div>
		<!-- Mobile -->
		<div class="flex justify-end items-center transition duration-300 ease-in-out md:hidden">
			{#if mobile}
				<button on:click={handleMobile}>
					<svg class="w-5 h-5 fill-gray-800/70" viewBox="0 0 20 20"
						><path
							d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
							clip-rule="evenodd"
							fill-rule="evenodd"
						/></svg
					>
				</button>
			{:else}
				<button on:click={handleMobile}>
					<svg class="w-5 h-5 fill-gray-800/70" viewBox="0 0 20 20"
						><path
							d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
							clip-rule="evenodd"
							fill-rule="evenodd"
						/></svg
					>
				</button>
			{/if}
		</div>
	</div>
	{#if mobile}
		<div
			class="fixed right-0 left-0 px-11 py-2 mt-[1.09rem] w-full h-screen bg-slate-50 md:hidden"
			transition:slide={{ duration: 300, easing: quintOut }}
		>
			<input
				type="search"
				class="px-6 py-2 w-full text-sm text-gray-600 rounded-md outline-none bg-gray-300/20 placeholder:font-medium"
				placeholder="Search"
			/>
			<div>
				<h1 class="py-1 text-sm font-bold leading-6 text-gray-700 uppercase">Home</h1>
				<h1 class="py-1 text-sm font-bold leading-6 text-gray-700 uppercase">Items</h1>
				<ul class="px-2 py-1 space-y-2 text-sm font-medium text-gray-700">
					<li on:click={handleMobile}><a class="hover:text-base-400" href="/">Weapon</a></li>
					<li on:click={handleMobile}><a class="hover:text-base-400" href="/items">Armor</a></li>
					<li on:click={handleMobile}><a class="hover:text-base-400" href="/">Helmet</a></li>
					<li on:click={handleMobile}><a class="hover:text-base-400" href="/">Cape</a></li>
					<li on:click={handleMobile}><a class="hover:text-base-400" href="/">Pet</a></li>
				</ul>
				<h1 class="py-1 text-sm font-bold leading-6 text-gray-700 uppercase">Features</h1>
				<ul class="px-2 py-1 space-y-2 text-sm font-medium text-gray-700">
					<li on:click={handleMobile}>
						<a class="hover:text-base-400" href="/">Rate Character</a>
					</li>
					<li on:click={handleMobile}>
						<a class="hover:text-base-400" href="/items">Need Help</a>
					</li>
				</ul>
				<h1 class="py-1 text-sm font-bold leading-6 text-gray-700 uppercase">About</h1>
			</div>
		</div>
	{/if}
</navbar>
