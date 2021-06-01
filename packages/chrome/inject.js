// this is the code which will be injected into a given page...

function codeToInject() {
    // just place a div at top right
	var div = document.createElement('div');
	div.style.position = 'fixed';
	div.style.top = 0;
	div.style.right = 0;
    div.style.backgroundColor = 'yellow';
	div.textContent = 'Quick starts injected!';
	document.body.appendChild(div);

    window.quickstarts = 'true';

    alert('Injected quick starts');
}

function embed(fn) {
    const script = document.createElement("script");
    script.text = `(${fn.toString()})();`;
    document.documentElement.appendChild(script);
}

embed(codeToInject);