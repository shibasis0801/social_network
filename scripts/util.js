const Util = {
    capitalize : word => word[0].toUpperCase() + word.substring(1),
    replace: (parent, oldNodeID, newNode) => {
        const el = document.getElementById(oldNodeID);
        if (el !== null) {
            parent.removeChild(el);
            parent.appendChild(newNode);
        }
        else {
            parent.appendChild(newNode);
        }
    }
};

export { Util };