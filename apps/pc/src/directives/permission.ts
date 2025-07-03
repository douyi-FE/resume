(window as any).permission = [
    'update',
    'delete',
    'query',
    'export',
    'import',
    'print',
    'download',
]

export default {
    mounted(el, binding) {
        const { value } = binding;
        if (Array.isArray(value) && value.length > 0) {
            const hasPermission = value.some((item: string) => (window as any).permission.includes(item));
            if (!hasPermission) {
                el.remove();
            }
        }
        else {
            throw new Error('v-permission value must be an array');
        }
    }
}