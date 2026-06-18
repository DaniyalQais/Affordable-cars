const { execSync, spawn } = require('child_process')

function killPort(port) {
    try {
        const out = execSync(`netstat -ano | findstr :${port}`, { encoding: 'utf8' })
        const pids = new Set()
        for (const line of out.split('\n')) {
            if (!line.includes('LISTENING')) continue
            const pid = line.trim().split(/\s+/).pop()
            if (pid && pid !== '0') pids.add(pid)
        }
        for (const pid of pids) {
            try {
                execSync(`taskkill /PID ${pid} /F`, { stdio: 'ignore' })
            } catch (_) {}
        }
    } catch (_) {}
}

killPort(3000)

const child = spawn('npx', ['next', 'start'], {
    stdio: 'inherit',
    shell: true,
})

child.on('exit', (code) => process.exit(code ?? 0))
