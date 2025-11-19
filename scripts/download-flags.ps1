# PowerShell script to download country flag SVGs
# Usage: .\scripts\download-flags.ps1

$flagsDir = "public\flags"
New-Item -ItemType Directory -Force -Path $flagsDir | Out-Null

Write-Host "Downloading flag SVGs..." -ForegroundColor Cyan

$flags = @(
    @{code="in"; name="India"},
    @{code="sg"; name="Singapore"},
    @{code="my"; name="Malaysia"},
    @{code="ae"; name="UAE"},
    @{code="us"; name="United States"}
)

foreach ($flag in $flags) {
    $url = "https://flagcdn.com/$($flag.code).svg"
    $output = "$flagsDir\$($flag.code).svg"
    
    try {
        Invoke-WebRequest -Uri $url -OutFile $output -UseBasicParsing
        Write-Host "✅ Downloaded $($flag.name) flag" -ForegroundColor Green
    } catch {
        Write-Host "❌ Failed to download $($flag.name): $_" -ForegroundColor Red
    }
}

Write-Host "`n✅ All flags downloaded to $flagsDir\" -ForegroundColor Green
Get-ChildItem $flagsDir | Format-Table Name, Length

