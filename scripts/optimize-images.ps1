$ErrorActionPreference = 'Stop'

Add-Type -AssemblyName System.Drawing

$Root = (Resolve-Path (Join-Path $PSScriptRoot '..')).Path
$OutDir = Join-Path $Root 'public\images\optimized'
New-Item -ItemType Directory -Force -Path $OutDir | Out-Null

$Codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() |
  Where-Object { $_.MimeType -eq 'image/jpeg' }
$QualityEncoder = [System.Drawing.Imaging.Encoder]::Quality

$Images = @(
  [pscustomobject]@{ Source = 'public\images\golf-nets\home\home-residential.jpg'; Name = 'home-residential-1600.jpg'; Width = 1600; Quality = 76 },
  [pscustomobject]@{ Source = 'public\images\golf-nets\home\home-residential.jpg'; Name = 'home-residential-900.jpg'; Width = 900; Quality = 74 },
  [pscustomobject]@{ Source = 'public\images\golf-nets\homeowners\residential-net.jpg'; Name = 'residential-net-760.jpg'; Width = 760; Quality = 74 },
  [pscustomobject]@{ Source = 'public\images\golf-nets\driving-range\driving-range.jpg'; Name = 'driving-range-760.jpg'; Width = 760; Quality = 74 },
  [pscustomobject]@{ Source = 'public\images\golf-nets\driving-range\cart-path.jpg'; Name = 'cart-path-760.jpg'; Width = 760; Quality = 74 },
  [pscustomobject]@{ Source = 'public\images\golf-nets\driving-range\practice-net.jpg'; Name = 'practice-net-760.jpg'; Width = 760; Quality = 74 },
  [pscustomobject]@{ Source = 'public\images\golf-nets\driving-range\course-netting.jpg'; Name = 'course-netting-760.jpg'; Width = 760; Quality = 74 },
  [pscustomobject]@{ Source = 'public\images\golf-nets\gallery\gallery-01.jpg'; Name = 'gallery-01-760.jpg'; Width = 760; Quality = 74 },
  [pscustomobject]@{ Source = 'public\images\golf-nets\gallery\gallery-02.jpeg'; Name = 'gallery-02-760.jpg'; Width = 760; Quality = 74 },
  [pscustomobject]@{ Source = 'public\images\golf-nets\gallery\gallery-03.jpg'; Name = 'gallery-03-760.jpg'; Width = 760; Quality = 74 },
  [pscustomobject]@{ Source = 'public\images\golf-nets\gallery\gallery-04.jpg'; Name = 'gallery-04-760.jpg'; Width = 760; Quality = 74 },
  [pscustomobject]@{ Source = 'public\images\golf-nets\gallery\gallery-05.jpg'; Name = 'gallery-05-760.jpg'; Width = 760; Quality = 74 },
  [pscustomobject]@{ Source = 'public\images\golf-nets\gallery\gallery-06.jpg'; Name = 'gallery-06-760.jpg'; Width = 760; Quality = 74 },
  [pscustomobject]@{ Source = 'public\images\golf-nets\gallery\gallery-07.jpg'; Name = 'gallery-07-760.jpg'; Width = 760; Quality = 74 },
  [pscustomobject]@{ Source = 'public\images\golf-nets\gallery\gallery-08.jpg'; Name = 'gallery-08-760.jpg'; Width = 760; Quality = 74 },
  [pscustomobject]@{ Source = 'public\images\golf-nets\gallery\gallery-09.jpg'; Name = 'gallery-09-760.jpg'; Width = 760; Quality = 74 },
  [pscustomobject]@{ Source = 'public\images\golf-nets\gallery\gallery-12-replacement.png'; Name = 'gallery-12-replacement-760.jpg'; Width = 760; Quality = 74 },
  [pscustomobject]@{ Source = 'public\images\golf-nets\gallery\gallery-02-replacement.png'; Name = 'gallery-02-replacement-760.jpg'; Width = 760; Quality = 74 },
  [pscustomobject]@{ Source = 'public\images\golf-nets\other-nets\service-01.jpeg'; Name = 'service-01-760.jpg'; Width = 760; Quality = 74 },
  [pscustomobject]@{ Source = 'public\images\golf-nets\other-nets\service-02.jpeg'; Name = 'service-02-760.jpg'; Width = 760; Quality = 74 },
  [pscustomobject]@{ Source = 'public\images\golf-nets\other-nets\service-06.jpeg'; Name = 'service-06-760.jpg'; Width = 760; Quality = 74 },
  [pscustomobject]@{ Source = 'public\images\golf-nets\other-nets\service-03.jpeg'; Name = 'service-03-760.jpg'; Width = 760; Quality = 74 },
  [pscustomobject]@{ Source = 'public\images\golf-nets\other-nets\service-04.jpeg'; Name = 'service-04-760.jpg'; Width = 760; Quality = 74 },
  [pscustomobject]@{ Source = 'public\images\golf-nets\other-nets\service-05.jpeg'; Name = 'service-05-760.jpg'; Width = 760; Quality = 74 },
  [pscustomobject]@{ Source = 'public\images\golf-nets\other-nets\service-07.jpeg'; Name = 'service-07-760.jpg'; Width = 760; Quality = 74 },
  [pscustomobject]@{ Source = 'public\images\golf-nets\other-nets\service-08.jpeg'; Name = 'service-08-760.jpg'; Width = 760; Quality = 74 },
  [pscustomobject]@{ Source = 'public\images\golf-nets\other-nets\service-09.jpeg'; Name = 'service-09-760.jpg'; Width = 760; Quality = 74 },
  [pscustomobject]@{ Source = 'public\images\golf-nets\homeowners\residential-system.jpg'; Name = 'residential-system-1200.jpg'; Width = 1200; Quality = 76 },
  [pscustomobject]@{ Source = 'public\images\golf-nets\homeowners\patio-infill.jpeg'; Name = 'patio-infill-760.jpg'; Width = 760; Quality = 74 },
  [pscustomobject]@{ Source = 'public\images\golf-nets\driving-range\driving-range-banner.jpg'; Name = 'driving-range-banner-1200.jpg'; Width = 1200; Quality = 76 },
  [pscustomobject]@{ Source = 'public\images\golf-nets\hoa\community-netting.jpeg'; Name = 'community-netting-1200.jpg'; Width = 1200; Quality = 76 },
  [pscustomobject]@{ Source = 'public\images\golf-nets\other-nets\service-01.jpeg'; Name = 'service-01-1200.jpg'; Width = 1200; Quality = 76 }
)

$Results = foreach ($Item in $Images) {
  $SourcePath = Join-Path $Root $Item.Source
  $TargetPath = Join-Path $OutDir $Item.Name
  $Image = [System.Drawing.Image]::FromFile($SourcePath)

  try {
    $Ratio = [Math]::Min(1.0, [double]$Item.Width / [double]$Image.Width)
    $Width = [Math]::Max(1, [int][Math]::Round([double]$Image.Width * $Ratio))
    $Height = [Math]::Max(1, [int][Math]::Round([double]$Image.Height * $Ratio))
    $Bitmap = New-Object System.Drawing.Bitmap $Width, $Height

    try {
      $Graphics = [System.Drawing.Graphics]::FromImage($Bitmap)
      try {
        $Graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
        $Graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
        $Graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
        $Graphics.DrawImage($Image, 0, 0, $Width, $Height)
      } finally {
        $Graphics.Dispose()
      }

      $EncoderParams = New-Object System.Drawing.Imaging.EncoderParameters 1
      $EncoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter $QualityEncoder, ([int64]$Item.Quality)
      $Bitmap.Save($TargetPath, $Codec, $EncoderParams)
    } finally {
      $Bitmap.Dispose()
    }

    [pscustomobject]@{
      File = $Item.Name
      Dimensions = "$Width x $Height"
      OriginalKB = [Math]::Round((Get-Item $SourcePath).Length / 1KB, 1)
      OptimizedKB = [Math]::Round((Get-Item $TargetPath).Length / 1KB, 1)
    }
  } finally {
    $Image.Dispose()
  }
}

$Results | Format-Table -AutoSize
