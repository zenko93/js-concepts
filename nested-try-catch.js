try {
    try {
        throw new Error('oops');
    } catch (ex) {
        if (true) {
            console.error('inner-true', ex.message);

            throw ex;
        }

        console.error('inner', ex.message);
        throw ex;
    } finally {
        console.log('finally');
    }
} catch (ex) {
    console.error('outer', ex.message);
}

// inner-true oops
// finally
// outer oops