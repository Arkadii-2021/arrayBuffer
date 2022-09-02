export function getBuffer() {
  const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  return (input => {
    const buffer = new ArrayBuffer(data.length * 2);
    const bufferView = new Uint16Array(buffer);
    for (let i in input) {
      bufferView[i] = input.charCodeAt(i);
    }
    return buffer;
  })(data);
}

export class ArrayBufferConverter {
	constructor(buffer) {
		this.buffer = buffer;
	}
	
	load() {
		return new Int16Array(this.buffer);
	}
	
	toString() {
		const strBufferView = [];
		const buffer16BitView = new Int16Array(this.buffer);
		for (let i in buffer16BitView) {
			strBufferView.push(String.fromCharCode(buffer16BitView[i]));
		};
        return strBufferView.join('');
    }
}
